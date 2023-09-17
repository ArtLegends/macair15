function determineLocation() {
    const userLang = (navigator.language || navigator.userLanguage).substring(0,2);
    return translations[userLang] ? userLang : 'en';
}

var translations = {
    "de": {
        "meta": {
            "description": "Bestellen Sie das neue MacBook Air 15 mit 30% Rabatt bei TechMarket. Sehen Sie sich die Spezifikationen und Funktionen dieses leistungsstarken Laptops an.",
            "keywords": "MacBook Air 15, MacBook, Apple, Laptop, TechMarket, Rabatt",
            "title": "MacBook Air 15 bestellen"
        },
        "images": {
            "macbook_air_15": "Bild von MacBook Air 15"
        },
        "content": {
            "h1": "MacBook Air 15",
            "h3_preorder": "Bestellen Sie das MacBook Air 15 bei TechMarket.",
            "p_description": "Das MacBook Air 15 ist die perfekte Wahl für diejenigen, die Stil und Leistung schätzen. Sein ultradünnes Design, das leichte Gewicht und der leistungsstarke Prozessor machen es zu einem unverzichtbaren Begleiter für Arbeit und Unterhaltung. Erleben Sie nahtloses Multitasking und beeindruckende Grafiken dank des neuesten Apple M-Serie-Chips.",
            "button_order": "Jetzt bestellen"
        },
        "promo_content": {
            "h2": "Warum MacBook Air 15?",
            "p1": "Das MacBook Air 15 bietet ein ultradünnes Design, unglaublich geringes Gewicht und leistungsstarke Performance. Mit dem neuesten Apple M-Serie-Chip bietet es nahtloses Multitasking, blitzschnelle Reaktionszeiten und eine Akkulaufzeit für den ganzen Tag.",
            "h3": "Warum bei TechMarket bestellen?",
            "p2": "Bei TechMarket stellen wir sicher, dass Sie zu den Ersten gehören, die die neuesten Geräte in den Händen halten. Genießen Sie exklusive Vorbestellvorteile, unübertroffenen Kundenservice und ein nahtloses Einkaufserlebnis. Außerdem können Sie besondere Rabatte und Angebote nutzen, die Sie nirgendwo anders finden!",
            "button_order": "Jetzt bestellen"
        },
        'specifications': {
            "Allgemein": {
                'Marke': 'Apple',
                'Modell': 'MacBook Air 15 (2023)',
                'Abmessungen (mm)': '11.50 x 340.40 x 237.60',
                'Gewicht (kg)': '1.51',
                'Farben': 'Mitternacht, Silber, Weltraum Grau, Sternenlicht',
                'Material': 'Aluminium',
                'Betriebssystem': 'macOS',
                'Batterielaufzeit (bis zu Stunden)': '18',
                'Batteriezelle': 'Lithium-Polymer'},
            "Display": {
                'Größe': '15.30-Zoll',
                'Auflösung': '1864x2880 Pixel',
                'Touchscreen': 'Nein',
                'Bildwiederholrate': '60 Hz'},
            "Prozessor": {
                'Prozessor': 'Apple M2'},
            "Speicher": {
                'RAM': '8 GB, 16 GB, 24 GB',
                'Erweiterbarer RAM bis (GB)': '24 GB'},
            "Speicherplatz": {
                'Festplatte': 'Nein',
                'SSD': '256 GB, 512 GB, 1 TB, 2 TB'},
            "Verbindung": {
                'Unterstützte WLAN-Standards': '802.11 a/b/g/n/ac/ax',
                'Bluetooth-Version': '5.3'},
            "Eingänge": {
                'Webkamera': 'Ja',
                'Zeigegerät': 'Trackpad',
                'Hintergrundbeleuchtete Tastatur': 'Ja',
                'Internes Mikrofon': 'Ja',
                'Fingerabdrucksensor': 'Ja'},
            "Ports und Steckplätze": {
                'Anzahl der USB-Ports': '2',
                'Thunderbolt 4 (Typ C)': '2',
                'Kopfhörer- und Mikrofon-Kombibuchse': 'Ja'}
        },
    },
    "en": {
        "meta": {
            "description": "Order the new MacBook Air 15 with a 30% discount at TechMarket. Check out the specifications and features of this powerful laptop.",
            "keywords": "MacBook Air 15, MacBook, Apple, Laptop, TechMarket, Discount",
            "title": "Order MacBook Air 15"
        },
        "images": {
            "macbook_air_15": "Picture of MacBook Air 15"
        },
        "content": {
            "h1": "MacBook Air 15",
            "h3_preorder": "Order the MacBook Air 15 at TechMarket.",
            "p_description": "The MacBook Air 15 is the perfect choice for those who value style and performance. Its ultra-thin design, lightweight, and powerful processor make it an indispensable companion for work and entertainment. Experience seamless multitasking and impressive graphics with the latest Apple M-series chip.",
            "button_order": "Order now"
        },
        "promo_content": {
            "h2": "Why MacBook Air 15?",
            "p1": "The MacBook Air 15 offers an ultra-thin design, incredibly low weight, and powerful performance. With the latest Apple M-series chip, it provides seamless multitasking, lightning-fast response times, and battery life for the entire day.",
            "h3": "Why order from TechMarket?",
            "p2": "At TechMarket, we ensure you are among the first to have the latest devices in hand. Enjoy exclusive pre-order benefits, unmatched customer service, and a seamless shopping experience. Plus, take advantage of special discounts and offers you won't find anywhere else!",
            "button_order": "Order now"
        },
        'specifications': {
            "General": {
                'Brand': 'Apple',
                'Model': 'MacBook Air 15 (2023)',
                'Dimensions (mm)': '11.50 x 340.40 x 237.60',
                'Weight (kg)': '1.51',
                'Colors': 'Midnight, Silver, Space Gray, Starlight',
                'Material': 'Aluminum',
                'Operating System': 'macOS',
                'Battery Life (up to hours)': '18',
                'Battery Cell': 'Lithium-Polymer'},
            "Display": {
                'Size': '15.30-Inch',
                'Resolution': '1864x2880 Pixels',
                'Touchscreen': 'No',
                'Refresh Rate': '60 Hz'},
            "Processor": {
                'Processor': 'Apple M2'},
            "Memory": {
                'RAM': '8 GB, 16 GB, 24 GB',
                'Expandable RAM up to (GB)': '24 GB'},
            "Storage": {
                'Hard Drive': 'No',
                'SSD': '256 GB, 512 GB, 1 TB, 2 TB'},
            "Connectivity": {
                'Supported Wi-Fi Standards': '802.11 a/b/g/n/ac/ax',
                'Bluetooth Version': '5.3'},
            "Inputs": {
                'Webcam': 'Yes',
                'Pointing Device': 'Trackpad',
                'Backlit Keyboard': 'Yes',
                'Internal Microphone': 'Yes',
                'Fingerprint Sensor': 'Yes'},
            "Ports and Slots": {
                'Number of USB Ports': '2',
                'Thunderbolt 4 (Type C)': '2',
                'Headphone and Microphone Combo Jack': 'Yes'}
        },
    },
    "fr": {
        "meta": {
            "description": "Commandez le nouveau MacBook Air 15 avec 30% de réduction chez TechMarket. Découvrez les spécifications et les fonctionnalités de cet ordinateur portable puissant.",
            "keywords": "MacBook Air 15, MacBook, Apple, Ordinateur portable, TechMarket, Réduction",
            "title": "Commander le MacBook Air 15"
        },
        "images": {
            "macbook_air_15": "Image du MacBook Air 15"
        },
        "content": {
            "h1": "MacBook Air 15",
            "h3_preorder": "Commandez le MacBook Air 15 chez TechMarket.",
            "p_description": "Le MacBook Air 15 est le choix parfait pour ceux qui apprécient le style et la performance. Son design ultra-mince, sa légèreté et son processeur puissant en font un compagnon indispensable pour le travail et les loisirs. Bénéficiez d'un multitâche fluide et de graphismes impressionnants grâce à la dernière puce Apple M-Series.",
            "button_order": "Commander maintenant"
        },
        "promo_content": {
            "h2": "Pourquoi choisir le MacBook Air 15?",
            "p1": "Le MacBook Air 15 offre un design ultra-mince, un poids incroyablement léger et de hautes performances. Avec la dernière puce Apple M-Series, il permet une multitâche fluide, des temps de réponse ultra-rapides et une autonomie de batterie pour toute la journée.",
            "h3": "Pourquoi commander chez TechMarket?",
            "p2": "Chez TechMarket, nous veillons à ce que vous soyez parmi les premiers à avoir les derniers appareils en main. Profitez d'avantages exclusifs pour les précommandes, d'un service client inégalé et d'une expérience d'achat fluide. De plus, bénéficiez de remises spéciales et d'offres que vous ne trouverez nulle part ailleurs!",
            "button_order": "Commander maintenant"
        },
        'specifications': {
            "Général": {
                'Marque': 'Apple',
                'Modèle': 'MacBook Air 15 (2023)',
                'Dimensions (mm)': '11.50 x 340.40 x 237.60',
                'Poids (kg)': '1.51',
                'Couleurs': 'Minuit, Argent, Gris Sidéral, Lumière Stellaire',
                'Matériel': 'Aluminium',
                'Système d\'exploitation': 'macOS',
                'Autonomie de la batterie (jusqu\'à heures)': '18',
                'Type de batterie': 'Lithium-Polymère'},
            "Affichage": {
                'Taille': '15.30 pouces',
                'Résolution': '1864x2880 Pixels',
                'Écran tactile': 'Non',
                'Taux de rafraîchissement': '60 Hz'},
            "Processeur": {
                'Processeur': 'Apple M2'},
            "Mémoire": {
                'RAM': '8 Go, 16 Go, 24 Go',
                'RAM extensible jusqu\'à (Go)': '24 Go'},
            "Stockage": {
                'Disque dur': 'Non',
                'SSD': '256 Go, 512 Go, 1 To, 2 To'},
            "Connectivité": {
                'Normes Wi-Fi supportées': '802.11 a/b/g/n/ac/ax',
                'Version Bluetooth': '5.3'},
            "Entrées": {
                'Caméra web': 'Oui',
                'Dispositif de pointage': 'Trackpad',
                'Clavier rétroéclairé': 'Oui',
                'Microphone interne': 'Oui',
                'Capteur d\'empreintes digitales': 'Oui'},
            "Ports et emplacements": {
                'Nombre de ports USB': '2',
                'Thunderbolt 4 (Type C)': '2',
                'Prise combo casque et microphone': 'Oui'}
        },
    },
    "es": {
        "meta": {
            "description": "Ordene la nueva MacBook Air 15 con un 30% de descuento en TechMarket. Mire las especificaciones y características de este potente portátil.",
            "keywords": "MacBook Air 15, MacBook, Apple, Portátil, TechMarket, Descuento",
            "title": "Ordenar el MacBook Air 15"
        },
        "images": {
            "macbook_air_15": "Imagen del MacBook Air 15"
        },
        "content": {
            "h1": "MacBook Air 15",
            "h3_preorder": "Ordene el MacBook Air 15 en TechMarket.",
            "p_description": "El MacBook Air 15 es la elección perfecta para aquellos que valoran el estilo y el rendimiento. Su diseño ultrafino, su ligereza y su potente procesador lo convierten en un compañero esencial para el trabajo y el entretenimiento. Experimente multitareas fluidas e impresionantes gráficos gracias al último chip de la serie M de Apple.",
            "button_order": "Ordenar ahora"
        },
        "promo_content": {
            "h2": "¿Por qué el MacBook Air 15?",
            "p1": "El MacBook Air 15 ofrece un diseño ultrafino, un peso increíblemente ligero y un rendimiento potente. Con el último chip de la serie M de Apple, ofrece multitareas fluidas, tiempos de respuesta ultrarrápidos y una duración de batería para todo el día.",
            "h3": "¿Por qué ordenar en TechMarket?",
            "p2": "En TechMarket, nos aseguramos de que sea uno de los primeros en tener los últimos dispositivos en sus manos. Disfrute de ventajas exclusivas para preórdenes, un servicio al cliente insuperable y una experiencia de compra sin problemas. Además, puede aprovechar descuentos y ofertas especiales que no encontrará en ningún otro lugar.",
            "button_order": "Ordenar ahora"
        },
        'specifications': {
            "General": {
                'Marca': 'Apple',
                'Modelo': 'MacBook Air 15 (2023)',
                'Dimensiones (mm)': '11.50 x 340.40 x 237.60',
                'Peso (kg)': '1.51',
                'Colores': 'Medianoche, Plata, Gris Espacial, Luz Estelar',
                'Material': 'Aluminio',
                'Sistema operativo': 'macOS',
                'Duración de la batería (hasta horas)': '18',
                'Tipo de batería': 'Lithium-Polímero'},
            "Pantalla": {
                'Tamaño': '15.30 pulgadas',
                'Resolución': '1864x2880 Píxeles',
                'Pantalla táctil': 'No',
                'Tasa de refresco': '60 Hz'},
            "Procesador": {
                'Procesador': 'Apple M2'},
            "Memoria": {
                'RAM': '8 GB, 16 GB, 24 GB',
                'RAM ampliable hasta (GB)': '24 GB'},
            "Almacenamiento": {
                'Disco duro': 'No',
                'SSD': '256 GB, 512 GB, 1 TB, 2 TB'},
            "Conexión": {
                'Estándares WLAN soportados': '802.11 a/b/g/n/ac/ax',
                'Versión de Bluetooth': '5.3'},
            "Entradas": {
                'Cámara web': 'Sí',
                'Dispositivo de señalización': 'Trackpad',
                'Teclado retroiluminado': 'Sí',
                'Micrófono interno': 'Sí',
                'Sensor de huellas dactilares': 'Sí'},
            "Puertos y ranuras": {
                'Número de puertos USB': '2',
                'Thunderbolt 4 (Tipo C)': '2',
                'Conector combinado de auriculares y micrófono': 'Sí'}
        },
    }
};

function applyTranslation(lang) {
    if (!translations[lang]) {
        console.error(`No translations available for language: ${lang}`);
        return; 
    }

    console.log("Lang value:", lang);

    document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
    if (translations[lang] && translations[lang].meta) {
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].meta.description);
        document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
        document.title = translations[lang].meta.title;
    } else {
        console.warn("Translation for the specified language is not available.");
    }    
    document.querySelector('meta[name="keywords"]').setAttribute('content', translations[lang].meta.keywords);
    document.title = translations[lang].meta.title;
    document.querySelector('img[src="photo_2023-08-06_15-42-25 (70).jpg"]').setAttribute("alt", translations[lang].images.macbook_air_15);

    document.querySelectorAll('img[alt="Bild von MacBook Air 15"]').forEach(img => {
        img.setAttribute('alt', translations[lang].images.macbook_air_15);
    });

    document.querySelector('h1').textContent = translations[lang].content.h1;
    document.querySelector('#preorderContent h3').textContent = translations[lang].content.h3_preorder;
    document.querySelector('#preorderContent p').textContent = translations[lang].content.p_description;
    document.querySelector('#preorderContent button').textContent = translations[lang].content.button_order;

    document.querySelector('.promo-content h2').textContent = translations[lang].promo_content.h2;
    document.querySelector('.promo-content p:nth-child(2)').textContent = translations[lang].promo_content.p1;
    document.querySelector('.promo-content h3').textContent = translations[lang].promo_content.h3;
    document.querySelector('.promo-content p:nth-child(4)').textContent = translations[lang].promo_content.p2;
    document.querySelector('.promo-content button').textContent = translations[lang].promo_content.button_order;

    var specSections = document.querySelectorAll('.specs-section');
    var specCategories = Object.keys(translations[lang].specifications);

    specSections.forEach((section, idx) => {
        var specCategory = specCategories[idx];
        var specKeys = Object.keys(translations[lang].specifications[specCategory]);
        specKeys.forEach(function(key, index) {
            section.querySelector(`.spec-row:nth-child(${index + 1}) .spec-value`).textContent = translations[lang].specifications[specCategory][key];
        });
    });
}

window.onload = function() {
    const userLang = determineLocation();
    applyTranslation(userLang);
    
    // Устанавливаем выбранным язык пользователя в выпадающем списке
    document.getElementById('languageSelector').value = userLang;
}


document.getElementById('languageSelector').addEventListener('change', function() {
    applyTranslation(this.value);
});
