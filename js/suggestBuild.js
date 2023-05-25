function openBuildPage(parameters) {
    const queryString = Object.entries(parameters)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  
    const url = `build.html?${queryString}`;
    window.location.href = url;
  }

  const build1 = {
    "CPU": "AMD Ryzen 3 3100",
    "CPU Cooler": "Stock Cooler",
    'Motherboard': "Gigabyte B450M DS3H",
    "Memory": "Corsair Vengeance LPX 8GB DDR4",
    "Storage": "Crucial MX500 240GB SSD",
    "Video Card": "NVIDIA GTX 1650",
    "Case": "Antec VSK10",
    "Power Supply": "Corsair CX450"
  };
  const build2 = {
    "CPU": "AMD Ryzen 5 3600",
    "CPU Cooler": "Cooler Master Hyper 212",
    "Motherboard": "MSI B450 TOMAHAWK MAX",
    "Memory": "Corsair Vengeance LPX 16GB DDR4",
    "Storage": "Samsung 970 EVO 500GB NVMe SSD",
    "Video Card": "NVIDIA GTX 1660 Super",
    "Case": "NZXT H510",
    "Power Supply": "Corsair CX550M"
  };
  const build3 = {
    "CPU": "AMD Ryzen 7 5800X",
    "CPU Cooler": "Noctua NH-D15",
    "Motherboard": "ASUS ROG Strix B550-F Gaming",
    "Memory": "Corsair Vengeance RGB Pro 16GB DDR4",
    "Storage": "Samsung 970 EVO Plus 1TB NVMe SSD",
    "Video Card": "NVIDIA RTX 3060 Ti",
    "Case": "Phanteks Eclipse P400A",
    "Power Supply": "Corsair RM750"
  };
  