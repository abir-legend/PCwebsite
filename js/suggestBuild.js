function openBuildPage(parameters) {
    const queryString = Object.entries(parameters)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  
    const url = `build.html?${queryString}`;
    window.location.href = url;
  }

  const build1 = {
    "cpu": "AMD Ryzen 3 3100",
    "Cooler": "Stock Cooler",
    'motherboard': "Gigabyte B450M DS3H",
    "ram": "LPX 16 GB",
    "storage": "Crucial P1",
    "gpu": "7600xtx",
    "case": "Antec VSK10",
    "psu": "Corsair CX450"
  };
  const build2 = {
    "cpu": "AMD Ryzen 5 3600",
    "Cooler": "Cooler Master Hyper 212",
    "motherboard": "MSI B450 TOMAHAWK MAX",
    "ram": "engeance RGB Pro 16 GB",
    "storage": "Samsung 970 Evo",
    "gpu": "arc770",
    "case": "NZXT H510",
    "psu": "Corsair CX550M"
  };
  const build3 = {
    "cpu": "AMD Ryzen 7 5800X",
    "Cooler": "Noctua NH-D15",
    "motherboard": "ASUS ROG Strix B550-F Gaming",
    "ram": "Trident Z RGB 16 GB",
    "storage": "Samsung 860 Evo",
    "gpu": "rtx4070",
    "case": "Phanteks Eclipse P400A",
    "psu": "Corsair RM750"
  };
  