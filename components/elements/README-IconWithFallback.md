# Contoh Penggunaan IconWithFallback Component

## Import Component
```javascript
import IconWithFallback from '@/components/elements/IconWithFallback'
```

## Penggunaan di EditorPicked2.js
```javascript
<div className="feature-icon mb-30">
    <IconWithFallback 
        src={item.image}
        alt={item.title}
        emoji={item.icon}
        size={64}
    />
</div>
```

## Penggunaan di HealthInfo.js untuk Final CTA
```javascript
<div className="mb-30">
    <IconWithFallback 
        src="/assets/imgs/cupi/chatbot-icon.png"
        alt="CuPI Chatbot"
        emoji="💬"
        size={120}
    />
</div>
```

## Keuntungan Component Ini:
1. **Automatic Fallback**: Jika gambar tidak ditemukan, otomatis show emoji
2. **Loading State**: Menampilkan emoji saat gambar sedang loading
3. **Error Handling**: Handle error jika gambar gagal load
4. **Reusable**: Bisa digunakan di mana saja dalam project
5. **Flexible Size**: Size bisa disesuaikan dengan parameter

## Cara Kerja:
1. Component akan coba load gambar dari `src`
2. Jika gambar berhasil load, emoji akan hilang
3. Jika gambar error atau tidak ada, emoji akan ditampilkan
4. Transition smooth antara emoji dan gambar