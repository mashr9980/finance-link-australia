import React, { useEffect } from 'react';

interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  title?: string;
}

export function IframeModal({ isOpen, onClose, src, title = "Application Form" }: IframeModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-4 max-h-[90vh] bg-dark-card rounded-xl shadow-2xl border border-teal-500/30 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-teal-500/30 bg-dark-surface">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-teal-900/20 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative">
          <iframe
            src={src}
            className="w-full h-[650px] md:h-[700px] border-0"
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
          
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-transparent via-transparent to-dark-bg/5"></div>
        </div>
        
        <div className="p-4 bg-dark-surface border-t border-teal-500/30">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-400">
              Secure application form powered by Finance Link Australia
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-teal-900/20 hover:bg-teal-900/40 text-teal-300 rounded-md transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}