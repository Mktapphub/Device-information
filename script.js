function parseDeviceInfo(deviceInfo) {
      if (deviceInfo.indexOf('iPhone') !== -1) {
            return 'iPhone';
              } else if (deviceInfo.indexOf('iPad') !== -1) {
                    return 'iPad';
              } else if (deviceInfo.indexOf('Android') !== -1) {
                    return 'Android';
                } else if (deviceInfo.indexOf('Windows') !== -1) {
                    return 'Windows';
              } else {
                    return 'Unknown';
                      }
                    }

                    var deviceName = parseDeviceInfo(navigator.userAgent);
                    var deviceModel = navigator.platform;
                    var osPlatform = navigator.platform;
                    var osVersion = navigator.userAgent;
                    var batteryPercentage = 'Battery API not supported';
                    var latitude = 'Geolocation API not supported';
                    var longitude = 'Geolocation API not supported';
                    var connectionType = 'Network Information API not supported';
                    var effectiveConnectionType = 'Network Information API not supported';

                    if (navigator.getBattery) {
                          navigator.getBattery().then(function (battery) {
                                batteryPercentage = Math.floor(battery.level * 100) + '%';
                                    updateBatteryPercentage();
                                      });
                                      } else if (navigator.battery) {
                                          batteryPercentage = Math.floor(navigator.battery.level * 100) + '%';
                                            updateBatteryPercentage();
                                            }

                                            if ('geolocation' in navigator) {
                                                  navigator.geolocation.getCurrentPosition(function (position) {
                                                        latitude = position.coords.latitude.toFixed(6);
                                                            longitude = position.coords.longitude.toFixed(6);
                                                                updateGeolocation();
                                                                  });
                                                                  }

                                                                  if ('connection' in navigator) {
                                                                      var networkConnection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

                                                                        connectionType = networkConnection.type || 'Unknown';
                                                                          effectiveConnectionType = networkConnection.effectiveType || 'Unknown';
                                                                            updateNetworkInformation();
                                                                  }

                                                                  function updateBatteryPercentage() {
                                                                      document.getElementById('battery-percentage').textContent = batteryPercentage;
                                                                      }

                                                                      function updateGeolocation() {
                                                                          document.getElementById('latitude').textContent = latitude;
                                                                            document.getElementById('longitude').textContent = longitude;
                                                                            }

                                                                            function updateNetworkInformation() {
                                                                                  document.getElementById('connection-type').textContent = connectionType;
                                                                                    document.getElementById('effective-connection-type').textContent = effectiveConnectionType;
                                                                                    }

                                                                                    document.getElementById('device-name').textContent = deviceName;
                                                                                    document.getElementById('device-model').textContent = deviceModel;
                                                                                    document.getElementById('os-platform').textContent = osPlatform;
                                                                                    document.getElementById('os-version').textContent = osVersion;

                                                                          
                                                 
                                      
                          
                    
             
            
     
