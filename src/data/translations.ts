export interface TranslationStrings {
  app: { name: string; tagline: string; welcome: string };
  nav: { home: string; rides: string; wallet: string; profile: string; settings: string };
  home: { 
    title: string; subtitle: string; pickup: string; destination: string; 
    recentPlaces: string; favorites: string; where: string; 
    enterDestination: string; selectPickup: string; selectDestination: string 
  };
  vehicles: { 
    title: string; moto: string; motoDesc: string; carro: string; carroDesc: string;
    pickup: string; pickupDesc: string; van: string; vanDesc: string;
    lancha: string; lanchaDesc: string; bus: string; busDesc: string;
    perPerson: string; available: string; arriving: string
  };
  ride: {
    searching: string; driverFound: string; driverEnRoute: string; driverArrived: string;
    inProgress: string; completed: string; cancelled: string;
    estimate: string; finalPrice: string; distance: string; duration: string;
    minutes: string; kilometers: string; confirmRide: string; cancelRide: string;
    negotiate: string; contactDriver: string; emergency: string
  };
  driver: { name: string; rating: string; trips: string; vehicle: string; plate: string; color: string; model: string };
  payment: {
    title: string; addMethod: string; efectivo: string; efectivoDesc: string;
    kushki: string; kushkiDesc: string; deuna: string; deunaDesc: string;
    transfer: string; transferDesc: string; banco: string; bancoDesc: string;
    payNow: string; payLater: string; confirmed: string; pending: string; failed: string
  };
  profile: {
    title: string; editProfile: string; trips: string; spent: string; rating: string;
    memberSince: string; myAddresses: string; addAddress: string; emergencyContact: string
  };
  settings: {
    title: string; language: string; notifications: string; privacy: string;
    help: string; about: string; logout: string; version: string
  };
  regions: { pastaza: string; napo: string; orellana: string; sucumbios: string; morona: string; Zamora: string };
  common: {
    loading: string; error: string; retry: string; cancel: string; confirm: string;
    save: string; edit: string; delete: string; close: string; back: string;
    next: string; done: string; search: string; noResults: string
  };
  errors: { network: string; location: string; rideFailed: string; paymentFailed: string };
}

export const translations: Record<string, TranslationStrings> = {
  es: {
    app: { name: 'ORIENT', tagline: 'Transporte Oriente Ecuador', welcome: 'Bienvenido' },
    nav: { home: 'Inicio', rides: 'Viajes', wallet: 'Billetera', profile: 'Perfil', settings: 'Ajustes' },
    home: { 
      title: '¿A dónde vas?', subtitle: 'Elige tu destino', pickup: 'Recoger en', destination: 'Ir a',
      recentPlaces: 'Lugares recientes', favorites: 'Favoritos', where: '¿Dónde vas?',
      enterDestination: 'Ingresa tu destino', selectPickup: 'Seleccionar punto de recogida', selectDestination: 'Seleccionar destino'
    },
    vehicles: {
      title: 'Selecciona tu vehículo', moto: 'MotoExpress', motoDesc: 'Rápido y económico',
      carro: 'CarroCompacto', carroDesc: 'Hasta 3 pasajeros', pickup: 'Camioneta 4x4', pickupDesc: 'Ideal para caminos rurales',
      van: 'VanGrupos', vanDesc: 'Hasta 12 pasajeros', lancha: 'LanchaRio', lanchaDesc: 'Cruces fluviales',
      bus: 'BusOriente', busDesc: 'Transporte público', perPerson: 'por persona', available: 'disponibles', arriving: 'llegando'
    },
    ride: {
      searching: 'Buscando conductor...', driverFound: '¡Conductor encontrado!', driverEnRoute: 'Conductor en camino',
      driverArrived: 'Conductor llegó', inProgress: 'Viaje en progreso', completed: 'Viaje completado', cancelled: 'Viaje cancelado',
      estimate: 'Precio estimado', finalPrice: 'Precio final', distance: 'Distancia', duration: 'Tiempo',
      minutes: 'minutos', kilometers: 'km', confirmRide: 'Confirmar viaje', cancelRide: 'Cancelar',
      negotiate: 'Negociar precio', contactDriver: 'Contactar', emergency: 'Emergencia'
    },
    driver: { name: 'Conductor', rating: 'calificación', trips: 'viajes', vehicle: 'Vehículo', plate: 'Placa', color: 'Color', model: 'Modelo' },
    payment: {
      title: 'Método de pago', addMethod: 'Agregar método', efectivo: 'Pago en efectivo', efectivoDesc: 'Paga al llegar',
      kushki: 'Tarjeta (Kushki)', kushkiDesc: 'Visa, Mastercard', deuna: 'DeUna', deunaDesc: 'Billetera digital',
      transfer: 'Transferencia', transferDesc: 'Transferencia bancaria', banco: 'Depósito', bancoDesc: 'Depósito en cuenta',
      payNow: 'Pagar ahora', payLater: 'Pagar después', confirmed: 'Pago confirmado', pending: 'Pago pendiente', failed: 'Pago fallido'
    },
    profile: {
      title: 'Mi perfil', editProfile: 'Editar', trips: 'Viajes', spent: 'Gastado', rating: 'Calificación',
      memberSince: 'Miembro desde', myAddresses: 'Mis direcciones', addAddress: 'Agregar dirección', emergencyContact: 'Contacto de emergencia'
    },
    settings: {
      title: 'Ajustes', language: 'Idioma', notifications: 'Notificaciones', privacy: 'Privacidad',
      help: 'Ayuda', about: 'Acerca de', logout: 'Cerrar sesión', version: 'Versión'
    },
    regions: { pastaza: 'Pastaza', napo: 'Napo', orellana: 'Orellana', sucumbios: 'Sucumbíos', morona: 'Morona Santiago', Zamora: 'Zamora Chinchipe' },
    common: {
      loading: 'Cargando...', error: 'Error', retry: 'Reintentar', cancel: 'Cancelar', confirm: 'Confirmar',
      save: 'Guardar', edit: 'Editar', delete: 'Eliminar', close: 'Cerrar', back: 'Atrás',
      next: 'Siguiente', done: 'Listo', search: 'Buscar', noResults: 'Sin resultados'
    },
    errors: { network: 'Error de conexión', location: 'No se pudo obtener ubicación', rideFailed: 'Error al solicitar viaje', paymentFailed: 'Error en el pago' }
  },
  en: {
    app: { name: 'ORIENT', tagline: 'Ecuador Oriente Transport', welcome: 'Welcome' },
    nav: { home: 'Home', rides: 'Rides', wallet: 'Wallet', profile: 'Profile', settings: 'Settings' },
    home: {
      title: 'Where to?', subtitle: 'Choose your destination', pickup: 'Pick up at', destination: 'Go to',
      recentPlaces: 'Recent places', favorites: 'Favorites', where: 'Where to?',
      enterDestination: 'Enter destination', selectPickup: 'Select pickup location', selectDestination: 'Select destination'
    },
    vehicles: {
      title: 'Select your vehicle', moto: 'MotoExpress', motoDesc: 'Fast and affordable',
      carro: 'CarCompact', carroDesc: 'Up to 3 passengers', pickup: '4x4 Pickup', pickupDesc: 'Ideal for rural roads',
      van: 'VanGroups', vanDesc: 'Up to 12 passengers', lancha: 'RiverBoat', lanchaDesc: 'River crossings',
      bus: 'BusOriente', busDesc: 'Public transport', perPerson: 'per person', available: 'available', arriving: 'arriving'
    },
    ride: {
      searching: 'Looking for driver...', driverFound: 'Driver found!', driverEnRoute: 'Driver on the way',
      driverArrived: 'Driver arrived', inProgress: 'Ride in progress', completed: 'Ride completed', cancelled: 'Ride cancelled',
      estimate: 'Estimated price', finalPrice: 'Final price', distance: 'Distance', duration: 'Duration',
      minutes: 'minutes', kilometers: 'km', confirmRide: 'Confirm ride', cancelRide: 'Cancel',
      negotiate: 'Negotiate price', contactDriver: 'Contact', emergency: 'Emergency'
    },
    driver: { name: 'Driver', rating: 'rating', trips: 'trips', vehicle: 'Vehicle', plate: 'License plate', color: 'Color', model: 'Model' },
    payment: {
      title: 'Payment method', addMethod: 'Add method', efectivo: 'Cash', efectivoDesc: 'Pay on arrival',
      kushki: 'Card (Kushki)', kushkiDesc: 'Visa, Mastercard', deuna: 'DeUna', deunaDesc: 'Digital wallet',
      transfer: 'Transfer', transferDesc: 'Bank transfer', banco: 'Deposit', bancoDesc: 'Account deposit',
      payNow: 'Pay now', payLater: 'Pay later', confirmed: 'Payment confirmed', pending: 'Payment pending', failed: 'Payment failed'
    },
    profile: {
      title: 'My profile', editProfile: 'Edit', trips: 'Trips', spent: 'Spent', rating: 'Rating',
      memberSince: 'Member since', myAddresses: 'My addresses', addAddress: 'Add address', emergencyContact: 'Emergency contact'
    },
    settings: {
      title: 'Settings', language: 'Language', notifications: 'Notifications', privacy: 'Privacy',
      help: 'Help', about: 'About', logout: 'Log out', version: 'Version'
    },
    regions: { pastaza: 'Pastaza', napo: 'Napo', orellana: 'Orellana', sucumbios: 'Sucumbíos', morona: 'Morona Santiago', Zamora: 'Zamora Chinchipe' },
    common: {
      loading: 'Loading...', error: 'Error', retry: 'Retry', cancel: 'Cancel', confirm: 'Confirm',
      save: 'Save', edit: 'Edit', delete: 'Delete', close: 'Close', back: 'Back',
      next: 'Next', done: 'Done', search: 'Search', noResults: 'No results'
    },
    errors: { network: 'Connection error', location: 'Could not get location', rideFailed: 'Error requesting ride', paymentFailed: 'Payment error' }
  },
  qu: {
    app: { name: 'ORIENT', tagline: 'Ecuador Oriente Transporti', welcome: 'Rimaykullayki' },
    nav: { home: 'Qallarim', rides: 'Puriris', wallet: 'Kullki', profile: 'Rimaykamayuq', settings: 'Kakillachiy' },
    home: {
      title: 'Mayta?', subtitle: 'Kikillayta akllay', pickup: 'Kikillay', destination: 'Riy',
      recentPlaces: 'Kunan puriris', favorites: 'Kuska', where: 'Mayta riy?',
      enterDestination: 'Kikillayta kiripay', selectPickup: 'Kikillay lugarta akllay', selectDestination: 'Destinu lugarta akllay'
    },
    vehicles: {
      title: 'Vehiculuta akllay', moto: 'MotoExpress', motoDesc: 'Achka uti llankay',
      carro: 'CarruCompact', carroDesc: 'Kimsa runakama', pickup: '4x4 Camioneta', pickupDesc: 'Allpa ñan kawsakuna',
      van: 'VanGrupos', vanDesc: 'Chunka ishkay runakama', lancha: 'Riyku', lanchaDesc: 'Mayu puriris',
      bus: 'BusOriente', busDesc: 'Kawsay autobus', perPerson: 'rimaq', available: 'kawsaq', arriving: 'riq'
    },
    ride: {
      searching: 'Kuchitimanta maskhan...', driverFound: 'Kuchiti!', driverEnRoute: 'Kuchiti riykuchkan',
      driverArrived: 'Kuchiti galya', inProgress: 'Puriqkun', completed: 'Tukuska', cancelled: 'Kansela',
      estimate: 'Taqa', finalPrice: 'Tuku taqa', distance: 'Karay', duration: 'Puriq',
      minutes: 'minutu', kilometers: 'km', confirmRide: 'Kuydiy', cancelRide: 'Kansela',
      negotiate: 'Taqa rimanakuy', contactDriver: 'Tapuy', emergency: 'Manchariy'
    },
    driver: { name: 'Kuchiti', rating: 'Kikincha', trips: 'puriris', vehicle: 'Vehículo', plate: 'Plaka', color: 'Kuru', model: 'Modelo' },
    payment: {
      title: 'Pagay manera', addMethod: ' manera adiy', efectivo: 'Quincha', efectivoDesc: 'Galya pagay',
      kushki: 'Tarpuy (Kushki)', kushkiDesc: 'Visa, Mastercard', deuna: 'DeUna', deunaDesc: 'Kullki digital',
      transfer: 'Kutichiy', transferDesc: 'Banco kutichiy', banco: 'Dipósitu', bancoDesc: 'Banco dipósitu',
      payNow: 'Kunan pagay', payLater: 'Qhipa pagay', confirmed: 'Pagaska', pending: 'Kawsaq', failed: 'Illakuy'
    },
    profile: {
      title: 'Rimaykachaq', editProfile: 'Kikillay', trips: 'Puriris', spent: 'Gastadu', rating: 'Kikincha',
      memberSince: 'Kaymanta', myAddresses: 'Lugarkuna', addAddress: 'Lugarta adiy', emergencyContact: 'Manchariylla tapukuy'
    },
    settings: {
      title: 'Kakillachiy', language: 'Simi', notifications: 'Willakuy', privacy: 'Pakalla',
      help: 'Yanapay', about: 'A cerca', logout: 'Lluqsiy', version: 'Versiyun'
    },
    regions: { pastaza: 'Pastaza', napo: 'Napu', orellana: 'Orellana', sucumbios: 'Sucumbios', morona: 'Morona', Zamora: 'Zamora' },
    common: {
      loading: 'Kayuchkan...', error: 'Illaku', retry: ' Kutiy', cancel: 'Kansela', confirm: 'Kuydiy',
      save: 'Kakillay', edit: 'Kikillay', delete: 'Pichay', close: 'Wichqay', back: 'Qhepaman',
      next: 'Qhipa', done: 'Tukuy', search: 'Maskhay', noResults: 'Mana tarisqachu'
    },
    errors: { network: 'Internet illaku', location: 'Lugarta mana tarin', rideFailed: 'Purita mana atiy', paymentFailed: 'Pagay illaku' }
  }
};

export const t = translations;
