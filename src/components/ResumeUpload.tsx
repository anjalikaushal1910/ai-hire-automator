import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, X, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface ResumeUploadProps {
  onUploadComplete?: () => void;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({ onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  const validateFile = (file: File): boolean => {
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document",
        variant: "destructive",
      });
      return false;
    }

    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const uploadResume = async () => {
    if (!selectedFile || !user) return;

    setUploading(true);
    try {
      // Create file path with user ID
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${user.id}/resume.${fileExt}`;

      // Upload file to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, selectedFile, {
          upsert: true // Replace existing file
        });

      if (uploadError) {
        throw uploadError;
      }

      // Save file metadata to database
      const { error: dbError } = await supabase
        .from('user_resumes')
        .upsert({
          user_id: user.id,
          file_name: selectedFile.name,
          file_path: uploadData.path,
          file_size: selectedFile.size,
          content_type: selectedFile.type,
        });

      if (dbError) {
        throw dbError;
      }

      toast({
        title: "Resume uploaded successfully!",
        description: "Your resume is now ready to be used for applications",
      });

      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      onUploadComplete?.();

    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: "Upload failed",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload Resume
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!selectedFile ? (
          <div
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInput}
            />
            <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-lg font-medium mb-2">Drop your resume here</p>
            <p className="text-sm text-muted-foreground mb-4">
              or click to browse files
            </p>
            <p className="text-xs text-muted-foreground">
              Supports PDF, DOC, DOCX files up to 5MB
            </p>
          </div>
        ) : (
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={removeSelectedFile}
                disabled={uploading}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {selectedFile && (
          <div className="flex gap-2">
            <Button
              onClick={uploadResume}
              disabled={uploading}
              className="flex-1"
            >
              {uploading ? (
                "Uploading..."
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Upload Resume
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={removeSelectedFile}
              disabled={uploading}
            >
              Cancel
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};