import React, { useState, useRef, useEffect } from 'react';
import './RichTextEditor.css';

const RichTextEditor = ({ value, onChange, placeholder = "Enter content...", className = "" }) => {
  const editorRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current && onChange) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    handleInput();
  };

  const handleKeyDown = (e) => {
    // Handle keyboard shortcuts
    if (e.ctrlKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          executeCommand('bold');
          break;
        case 'i':
          e.preventDefault();
          executeCommand('italic');
          break;
        case 'u':
          e.preventDefault();
          executeCommand('underline');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={`rich-text-editor ${className}`}>
      {/* Toolbar */}
      <div className="editor-toolbar">
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('bold')}
            title="Bold (Ctrl+B)"
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('italic')}
            title="Italic (Ctrl+I)"
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('underline')}
            title="Underline (Ctrl+U)"
          >
            <u>U</u>
          </button>
        </div>
        
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('formatBlock', 'h2')}
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('formatBlock', 'h3')}
            title="Heading 3"
          >
            H3
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('formatBlock', 'p')}
            title="Paragraph"
          >
            P
          </button>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('insertUnorderedList')}
            title="Bullet List"
          >
            • List
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('insertOrderedList')}
            title="Numbered List"
          >
            1. List
          </button>
        </div>

        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => {
              const url = prompt('Enter URL:');
              if (url) {
                executeCommand('createLink', url);
              }
            }}
            title="Add Link"
          >
            Link
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => executeCommand('unlink')}
            title="Remove Link"
          >
            Unlink
          </button>
        </div>
      </div>

      {/* Editor Content */}
      <div
        ref={editorRef}
        contentEditable
        className="editor-content"
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
        suppressContentEditableWarning={true}
        data-placeholder={placeholder}
      />
      
      {/* Character count or other info */}
      <div className="editor-info">
        <small className="text-gray-500">
          Use toolbar buttons or keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U)
        </small>
      </div>
    </div>
  );
};

export default RichTextEditor;
