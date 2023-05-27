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
    "ram": "Corsair Vengeance LPX 8GB DDR4",
    "storage": "Crucial MX500 240GB SSD",
    "gpu": "NVIDIA GTX 1650",
    "Case": "Antec VSK10",
    "psu": "Corsair CX450"
  };
  const build2 = {
    "cpu": "AMD Ryzen 5 3600",
    "Cooler": "Cooler Master Hyper 212",
    "motherboard": "MSI B450 TOMAHAWK MAX",
    "ram": "Corsair Vengeance LPX 16GB DDR4",
    "storage": "Samsung 970 EVO 500GB NVMe SSD",
    "gpu": "NVIDIA GTX 1660 Super",
    "Case": "NZXT H510",
    "psu": "Corsair CX550M"
  };
  const build3 = {
    "cpu": "AMD Ryzen 7 5800X",
    "Cooler": "Noctua NH-D15",
    "motherboard": "ASUS ROG Strix B550-F Gaming",
    "ram": "Corsair Vengeance RGB Pro 16GB DDR4",
    "storage": "Samsung 970 EVO Plus 1TB NVMe SSD",
    "gpu": "NVIDIA RTX 3060 Ti",
    "Case": "Phanteks Eclipse P400A",
    "psu": "Corsair RM750"
  };
  