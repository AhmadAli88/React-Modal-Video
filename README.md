# Video ID Guide for React Modal Video

This guide explains how to obtain the video ID from various video platforms for use with the `react-modal-video` component.

## 1. YouTube Video ID

The **YouTube video ID** is part of the video's URL. It can be found in two main formats:

### Standard YouTube URL:
- **Example URL**: `https://www.youtube.com/watch?v=XxVg_s8xAms`
- **Video ID**: `XxVg_s8xAms`
  
  The video ID is the part after `v=` in the URL.

### YouTube Shortened URL:
- **Example URL**: `https://youtu.be/XxVg_s8xAms`
- **Video ID**: `XxVg_s8xAms`
  
  The video ID is the last part after the slash `/`.

## 2. Vimeo Video ID

For **Vimeo**, the video ID is part of the video URL:

- **Example URL**: `https://vimeo.com/123456789`
- **Video ID**: `123456789`
  
  The video ID is the last part of the URL after `/`.

## 3. Other Platforms

For other video platforms, such as **Dailymotion**, the video ID is typically embedded in the URL:

### Dailymotion:
- **Example URL**: `https://www.dailymotion.com/video/x7zjw97`
- **Video ID**: `x7zjw97`

### Custom URLs (Self-hosted or Other Platforms):
- If you are using a custom URL for a video (like from your server or another platform), you will need to manually specify the URL or use a method provided by the platform to obtain the video ID or embed link.

## Summary

- **YouTube**: The video ID is located after `v=` in the URL.
- **Vimeo**: The video ID is the last number in the URL.
- **Dailymotion**: The video ID is the alphanumeric code at the end of the URL.
  
---

### Example Usage in React Modal Video Component

For example, when using the `react-modal-video` component with YouTube:

```jsx
<ModalVideo 
  channel="youtube" 
  isOpen={isOpen} 
  videoId="XxVg_s8xAms" 
  onClose={() => setIsOpen(false)} 
/>



This `README.md` file will explain to anyone using the project how to find the correct video ID for YouTube, Vimeo, and other platforms.
