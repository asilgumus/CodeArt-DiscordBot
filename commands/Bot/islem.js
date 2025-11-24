export default {
    name: "islem",
    cooldown: 5,
    execute(message, args) {
        if (args.length === 0) {
            return message.channel.send('Lütfen bir işlem girin. Örnek: 5+3, 10/2, sqrt(16), 2^3');
        }

        const input = args.join(''); // Kullanıcının girdiği ifadeyi birleştir
        let result;

        // Güvenlik için sadece izin verilen karakterleri kabul et
        if (!isSafeExpression(input)) {
            return message.channel.send('Geçersiz karakterler kullanıldı. Lütfen sadece sayılar ve matematiksel operatörler kullanın.');
        }

        try {
            // Karekök ve üs işlemlerini işleyelim
            const processedInput = processCustomOperations(input);

            // Diğer işlemler (parantezli işlemler ve temel matematik operatörleri)
            result = eval(processedInput); // Girdiyi JavaScript'in eval fonksiyonuyla değerlendir

            message.channel.send(`Sonuç: ${result}`);
        } catch (error) {
            message.channel.send('Bir hata oluştu. Lütfen işleminizi kontrol edin.');
        }
    }
}

// Güvenli matematiksel ifadeleri değerlendirmek için (izin verilen karakterleri filtreler)
function isSafeExpression(input) {
    // Yalnızca sayı, +, -, *, /, ^, ( ), sqrt() ve boşlukları kabul eder
    return /^[0-9+\-*/().\s^sqrt]*$/.test(input);
}

// Kendi işlemlerimizi işleyen fonksiyon (karekök ve üs işlemi)
function processCustomOperations(input) {
    // Kareköklü işlemleri `Math.sqrt()` fonksiyonuyla işleyelim
    input = input.replace(/sqrt\(([^)]+)\)/g, (match, number) => {
        return `Math.sqrt(${number})`;
    });

    // Üslü işlemleri `Math.pow()` fonksiyonuna dönüştürelim
    input = input.replace(/([0-9.]+)\^([0-9.]+)/g, (match, base, exponent) => {
        return `Math.pow(${base}, ${exponent})`;
    });

    return input;
}
