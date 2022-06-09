
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include "FirebaseESP8266.h"
#include <DHT.h>

// Pines
#define DHT11PIN 4
#define SENSORDHT11 5

// El tipo de sensor
#define DHTTYPE DHT11
DHT dht(SENSORDHT11, DHTTYPE);

// Host servidor
#define FIREBASE_HOST "invernatron-a7420-default-rtdb.firebaseio.com"

// Secretos de la base de datos
#define FIREBASE_AUTH "6GA6stqtnY5TDiyf5nvU7TgrnEzFy78n6aKrAkVP"

// Punte acceso Wifi
#define WIFI_SSID "Tejada"
#define WIFI_PASSWORD "TejadaTex2*"
WiFiClient client; 
FirebaseData firebaseData;
void setup() {
  
  Serial.begin(9600);
  WiFi.begin (WIFI_SSID, WIFI_PASSWORD);
    
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
      
  Serial.println ("");
  Serial.println ("Se conectó al wifi!");
  Serial.println(WiFi.localIP());
    
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  dht.begin();

  pinMode(DHT11PIN, OUTPUT);
  pinMode(SENSORDHT11, INPUT);
}

void loop() {

  Firebase.getInt(firebaseData,"parametros/state/state");
  int value=firebaseData.intData();
  
  digitalWrite(DHT11PIN, value);

  float t = dht.readTemperature();
  int h = dht.readHumidity(); 
     
  Firebase.setFloat(firebaseData,"parametros/state/temperature", t);  
  Firebase.setFloat(firebaseData,"parametros/state/humidity", h);
    
}
