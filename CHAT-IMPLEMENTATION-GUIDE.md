# 🤖 Panduan Implementasi Chat Dialogflow di CuPI

## 📍 **3 Opsi Penempatan Chat Widget**

### **OPSI 1: Global Floating Chat (RECOMMENDED) ✅**
**Lokasi**: `components/layout/Layout.js` (Sudah diimplementasikan)
**Keuntungan**:
- Muncul di semua halaman
- Floating di kanan bawah (seperti WhatsApp)
- User bisa akses kapan saja
- Tidak mengganggu konten utama

**Status**: ✅ **SUDAH DIIMPLEMENTASIKAN**

---

### **OPSI 2: Chat Button di Hero Section**
**Lokasi**: `components/sections/Hero2.js`
**Implementasi**:

```javascript
// Ganti tombol "Mulai Periksa Sekarang" dengan ChatButton
import { useState } from 'react'
import DialogflowChat from '@/components/elements/DialogflowChat'
import ChatButton from '@/components/elements/ChatButton'

const Hero2 = () => {
    const [showChat, setShowChat] = useState(false)
    
    return (
        <div className="mt-40">
            <ChatButton 
                onClick={() => setShowChat(!showChat)}
                isActive={showChat}
            />
            
            {showChat && (
                <div className="chat-overlay">
                    <DialogflowChat 
                        isVisible={showChat}
                        position="center"
                        customStyle={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1000
                        }}
                    />
                </div>
            )}
        </div>
    )
}
```

---

### **OPSI 3: Chat Terintegrasi di Section**
**Lokasi**: Buat section khusus chat
**Implementasi**: Embed chat langsung di halaman sebagai bagian konten

---

## 🎨 **Customization yang Sudah Diterapkan**

### **Styling Sesuai Brand CuPI**:
```css
--df-messenger-font-family: 'Noto Sans'
--df-messenger-message-user-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--df-messenger-primary-color: #667eea
--df-messenger-titlebar-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### **Responsive Design**:
- Desktop: 350px x 500px
- Mobile: Full width dengan max-width 350px
- Tablet: Menyesuaikan dengan layar

---

## 🚀 **Cara Mengaktifkan**

### **Current Implementation (Opsi 1)**:
Chat sudah aktif di `Layout.js` dengan komponen `DialogflowChat`

### **Untuk Menggunakan Opsi 2**:
1. Edit `Hero2.js`
2. Import komponen yang dibutuhkan
3. Tambahkan state management
4. Ganti tombol existing dengan `ChatButton`

### **Untuk Disable Chat**:
```javascript
// Di Layout.js, set isVisible={false}
<DialogflowChat 
    isVisible={false}  // <-- Ubah ke false
    position="bottom-right"
    showOnMobile={true}
/>
```

---

## 📱 **Mobile Optimization**

- **Auto-resize** untuk layar kecil
- **Bottom positioning** yang optimal
- **Touch-friendly** interface
- **Responsive** chat window

---

## 🔧 **Konfigurasi Chat**

### **Current Settings**:
```javascript
project-id="adept-lead-435007-p0"
agent-id="5df7f970-1a57-4cbb-b7fa-de56a31fcd54"
language-code="id"
chat-title="CuPI - Konsultasi Kesehatan"
```

### **Untuk Mengubah Perilaku**:
- `isVisible`: Show/hide chat
- `position`: 'bottom-right', 'bottom-left', 'center'
- `showOnMobile`: Enable/disable pada mobile
- `customStyle`: Override CSS langsung

---

## 💡 **Rekomendasi**

**Gunakan Opsi 1 (Current)** karena:
1. ✅ User experience terbaik
2. ✅ Tidak mengganggu UI
3. ✅ Accessible dari mana saja
4. ✅ Sesuai standar industri
5. ✅ Mobile-friendly

**Chat sudah siap digunakan!** 🎉