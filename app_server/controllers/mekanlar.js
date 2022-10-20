var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa',
    { "baslik": 'Ana Sayfa',
      "sayfaBaslik":{
        "siteAd":"Mekanbul",
        "slogan":"Civardaki Mekanları Keşfet!"
      },
      "mekanlar":[
        {
          "ad":"Barida Kafe",
          "adres":"Sdü Batı Kampüsü",
          "puan":"4",
          "mesafe":"2km",
          "imkanlar":["Kahve","Çay","Pasta"]
        },
        {
          "ad":"Gloria Jeans",
          "adres":"Sdü Doğu Kampüsü",
          "puan":"2",
          "mesafe":"5km",
          "imkanlar":["Kahve","Çay","Pasta"]
        }

      ]
  
  });
  }

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi',
    { "baslik": 'Mekan bilgisi',
      "mekanBaslik":"Starbucks",
      "mekanDetay":{
        "ad":"Starbucks",
        "adres":"Centrum Garden AVM",
        "puan":"4",
        "saatler":[
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9.00",
            "kapanis":"23.00",
            "kapali":"false"
          },
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10.00",
            "kapanis":"22.00",
            "kapali":"false"
          }
        ],
        "imkanlar":["Kahve","Çay","Kek"],
        "koordinatlar":{
          "enlem":"37.7",
          "boylam":"30.5"
        },
        "yorumlar":[
          {
            "yorumYapan":"Yasin",
            "puan":"3",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Çok berbat"
          },
          {
            "yorumYapan":"Ali",
            "puan":"5",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Süper"
          }
        ]

      }
  
  });
  }

const yorumEkle=function(req, res) {
    res.render('yorumekle', { title: 'Yorum Sayfası' });
  }

  module.exports={

    anaSayfa,
    mekanBilgisi,
    yorumEkle

  }