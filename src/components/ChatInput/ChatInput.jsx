import { Image, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  DragText,
  FooterHint,
  ImagePreview,
  ImagePreviewButton,
  ImagePreviewContainer,
  InputContainer,
  InputRow,
  SendButton,
  TextArea,
  UploadButton,
} from "./styles";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

export function ChatInput({ input, setInput, loading, sendMessage }) {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
  }, [input]);

  useEffect(() => {
    return () => {
      if (selectedImage?.previewUrl) {
        URL.revokeObjectURL(selectedImage.previewUrl);
      }
    };
  }, [selectedImage]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function validateImage(file) {
    if (!file.type.startsWith("image/")) {
      alert("Envie apenas arquivos de imagem.");
      return false;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      alert("A imagem deve ter no máximo 5MB.");
      return false;
    }

    return true;
  }

  function handleImageChange(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!validateImage(file)) {
      event.target.value = "";
      return;
    }

    if (selectedImage?.previewUrl) {
      URL.revokeObjectURL(selectedImage.previewUrl);
    }

    setSelectedImage({
      file,
      previewUrl: URL.createObjectURL(file),
    });
  }

  function removeImage() {
    if (selectedImage?.previewUrl) {
      URL.revokeObjectURL(selectedImage.previewUrl);
    }

    setSelectedImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleSubmit() {
    if ((!input.trim() && !selectedImage) || loading) return;

    sendMessage({
      text: input.trim(),
      image: selectedImage?.file || null,
    });

    setInput("");
    removeImage();

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    if (!validateImage(file)) return;

    if (selectedImage?.previewUrl) {
      URL.revokeObjectURL(selectedImage.previewUrl);
    }

    setSelectedImage({
      file,
      previewUrl: URL.createObjectURL(file),
    });
  }

  function handleDragOver(event) {
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  return (
    <InputContainer
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      $dragActive={dragActive}
    >
      {dragActive && <DragText>Solte a imagem aqui 📷</DragText>}

      {selectedImage && (
        <ImagePreviewContainer>
          <ImagePreview src={selectedImage.previewUrl} alt="Preview da imagem" />

          <ImagePreviewButton
            type="button"
            onClick={removeImage}
            aria-label="Remover imagem"
          >
            <X size={14} />
          </ImagePreviewButton>
        </ImagePreviewContainer>
      )}

      <InputRow $dragActive={dragActive}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />

        <UploadButton
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
          aria-label="Enviar imagem"
          title="Enviar imagem"
        >
          <Image size={18} />
        </UploadButton>

        <TextArea
          ref={textareaRef}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          rows={1}
          disabled={loading}
        />

        <SendButton
          type="button"
          onClick={handleSubmit}
          disabled={(!input.trim() && !selectedImage) || loading}
          aria-label="Enviar mensagem"
          title="Enviar mensagem"
        >
          <Send size={18} />
        </SendButton>
      </InputRow>

      <FooterHint>Enter para enviar · Shift + Enter para nova linha</FooterHint>
    </InputContainer>
  );
}