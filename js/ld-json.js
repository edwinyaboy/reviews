const ldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "LitFarms Personal Favorite!",
      "brand": {
        "@type": "Brand",
        "name": "LitFarms"
      },
      "image": "https://thcabuzz.com/media/litfarms.webp",
      "description": "LitFarms offers quality THCa flower and prerolls at great prices. Shop top strains with ounces starting from $19.99—perfect for new and experienced users.",
      "url": "https://thcabuzz.com/lf",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "1"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "19.99",
        "availability": "https://schema.org/InStock",
        "url": "https://thcabuzz.com/lf"
      }
    },
    {
      "@type": "Product",
      "name": "JKDistro",
      "brand": {
        "@type": "Brand",
        "name": "JKDistro"
      },
      "image": "https://thcabuzz.com/media/jkdistro.webp",
      "description": "Solid selection of THCa flower with affordable ounces. JKDistro frequently runs promotions and bundle deals, mixing budget and premium options for every user.",
      "url": "https://thcabuzz.com/jkd",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "1"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "24.99",
        "availability": "https://schema.org/InStock",
        "url": "https://thcabuzz.com/jkd"
      }
    },
    {
      "@type": "Product",
      "name": "Baysmokes",
      "brand": {
        "@type": "Brand",
        "name": "Baysmokes"
      },
      "image": "https://thcabuzz.com/media/baysmokes.webp",
      "description": "Hit or miss. Supplier issues can cause moldy flower. Can get lucky with a good batch, but risk is high. Not recommended for most buyers.",
      "url": "https://thcabuzz.com/bs",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "2.5",
        "reviewCount": "1"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "19.99",
        "availability": "https://schema.org/InStock",
        "url": "https://thcabuzz.com/bs"
      }
    },
    {
      "@type": "Product",
      "name": "ShopHelloMary",
      "brand": {
        "@type": "Brand",
        "name": "ShopHelloMary"
      },
      "image": "https://thcabuzz.com/media/hellomary.webp",
      "description": "Decent products, but everything is overpriced for what you get. Save your money and shop elsewhere.",
      "url": "https://thcabuzz.com/shm",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "2.0",
        "reviewCount": "1"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "29.99",
        "availability": "https://schema.org/InStock",
        "url": "https://thcabuzz.com/shm"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is THCa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "THCa (tetrahydrocannabinolic acid) is the natural, raw form of THC found in cannabis flower. It becomes psychoactive THC when heated."
          }
        },
        {
          "@type": "Question",
          "name": "Does THCa get you high?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When heated (smoked or vaped), THCa converts into THC and produces the same effects as traditional cannabis."
          }
        },
        {
          "@type": "Question",
          "name": "How can this be legal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hemp-derived THCa with less than 0.3% delta-9 THC is federally legal under the 2018 Farm Bill. THCa itself is non-psychoactive until heated."
          }
        },
        {
          "@type": "Question",
          "name": "What states can this be shipped to?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "THCa flower cannot be shipped to certain states including: Arkansas, Idaho, Kansas, Kentucky, Louisiana, Minnesota, Oregon, Rhode Island, and Utah. Always check local laws."
          }
        }
      ]
    }
  ]
};

// Inject JSON-LD dynamically
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(ldJson);
document.head.appendChild(script);
