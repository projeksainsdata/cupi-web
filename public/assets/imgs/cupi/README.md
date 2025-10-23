# Panduan Menambahkan Gambar untuk CuPI

## Lokasi File Gambar
Letakkan semua gambar CuPI di folder: `/public/assets/imgs/cupi/`

## Gambar yang Dibutuhkan

### 1. Logo/Icon Chatbot Utama
- **File**: `chatbot-icon.png`
- **Ukuran**: 120x120px (minimal), bisa lebih besar
- **Format**: PNG dengan background transparan
- **Deskripsi**: Icon untuk section final CTA

### 2. Hero Background (Opsional)
- **File**: `hero-bg.jpg` atau `hero-bg.png`
- **Ukuran**: 1920x1080px
- **Format**: JPG atau PNG
- **Deskripsi**: Background image untuk hero section

### 3. Feature Icons (Opsional)
- **File**: `ai-icon.png`, `security-icon.png`, `personalized-icon.png`
- **Ukuran**: 64x64px
- **Format**: PNG dengan background transparan
- **Deskripsi**: Icon untuk setiap fitur utama

## Cara Mengganti Icon dengan Gambar

### Di HealthInfo.js (baris 150-165):
```javascript
// Hapus bagian icon-placeholder dan uncomment bagian Image
<Image 
    src="/assets/imgs/cupi/chatbot-icon.png" 
    alt="CuPI Chatbot" 
    width={120} 
    height={120}
    className="mx-auto cupi-image"
/>
```

### Di EditorPicked2.js:
```javascript
// Ganti bagian icon dengan Image component
<div className="feature-icon mb-30">
    <Image 
        src="/assets/imgs/cupi/ai-icon.png" 
        alt="AI Technology" 
        width={64} 
        height={64}
    />
</div>
```

### Di Hero2.js:
```javascript
// Untuk background image di hero section
<div className="banner banner-home2" style={{
    backgroundImage: 'url(/assets/imgs/cupi/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}}>
```

## Tips Optimasi Gambar

1. **Kompres gambar** sebelum diupload untuk loading yang lebih cepat
2. **Gunakan format WebP** jika memungkinkan untuk kompresi yang lebih baik
3. **Siapkan versi 2x** untuk retina display (contoh: `chatbot-icon@2x.png`)
4. **Alt text** yang deskriptif untuk accessibility

## Tools Rekomendasi
- **TinyPNG**: Untuk kompres PNG
- **Squoosh**: Web tool Google untuk optimasi gambar
- **Figma/Canva**: Untuk design icon dan graphics

## Contoh Implementasi Lengkap
```javascript
// Dengan fallback jika gambar tidak tersedia
<div className="icon-container">
    {imageExists ? (
        <Image 
            src="/assets/imgs/cupi/chatbot-icon.png" 
            alt="CuPI Chatbot" 
            width={120} 
            height={120}
            onError={() => setImageExists(false)}
        />
    ) : (
        <div className="icon-fallback">💬</div>
    )}
</div>
```