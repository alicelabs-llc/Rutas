# ORIENT🚗 - Especificación Técnica Completa

## 1. Visión General del Proyecto

**Nombre:** ORIENT🚗 (OrientEcuador Transport)

**Descripción:** Aplicación de transporte multimodal para el Oriente Ecuatoriano que conecta usuarios con conductores de motorcycles, pickups/vans, y lanchochas/riverboats para desplazamientos urbanos y rurales en las provincias de Pastaza, Napo, Orellana, Sucumbíos, Morona Santiago y Zamora Chinchipe.

**Inspiración:** Combinación de las mejores características de Uber, Indrive, y Pedidos Ya con adaptaciones específicas para la geografía y cultura del Oriente Ecuatoriano.

---

## 2. Tipos de Vehículos y Servicios

### 2.1 Categorías de Transporte

| Código | Nombre | Icono | Capacidad | Uso Principal |
|--------|--------|-------|-----------|----------------|
| `moto` | MotoExpress | 🏍️ | 1-2 pasajeros | Entregas rápidas, zonas urbanas |
| `carro` | CarroCompacto | 🚗 | 3 pasajeros | Viajes urbanos cortos |
| `pickup` | Camioneta4x4 | 🛻 | 5-7 pasajeros | Viajes largos, carga ligera |
| `van` | VanGrupos | 🚐 | 8-12 pasajeros | Grupos, turismo |
| `lancha` | LanchaRio | ⛵ | 6-15 pasajeros | Cruces fluviales, zonas ribereñas |
| `bus` | BusOriente | 🚌 | 20-40 pasajeros | Rutas固定, transporte público |

### 2.2 Tipos de Servicio

- **Express:** Servicio rápido con tiempo estimado de llegada (TEL)
- **Programado:** Reserva con anticipación (1-24 horas)
- **Negociado:** Precio acordado entre usuario y conductor (estilo Indrive)
- **Paquete:** Envío de paquetes/encomiendas
- **Emergencia:** Servicio prioritario con incremento de precio

---

## 3. Billeteras y Métodos de Pago

### 3.1 Métodos Soportados

| Método | Tipo | Descripción |
|--------|------|-------------|
| `pagoefectivo` | Billetera | Pago en efectivo al momento del servicio |
| `kushki` | Tarjeta | Procesador de pagos con tarjetas locales e internacionales |
| `deuna` | Billetera | Billetera digital ecuatoriana popular |
| `transfer` | Bancario | Transferencia interbancaria |
| `banco` | Depósito | Depósito en cuenta bancaria |

### 3.2 Flujo de Pago

```
Usuario → Selecciona método → Confirmación → Procesamiento → Comprobante
```

---

## 4. Arquitectura de Componentes

### 4.1 Estructura de Archivos

```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── BottomSheet.tsx
│   │   └── Avatar.tsx
│   ├── map/
│   │   ├── MapView.tsx
│   │   ├── RouteOverlay.tsx
│   │   ├── DriverMarker.tsx
│   │   └── DestinationMarker.tsx
│   ├── ride/
│   │   ├── VehicleSelector.tsx
│   │   ├── RideCard.tsx
│   │   ├── RideTracking.tsx
│   │   ├── DriverInfo.tsx
│   │   └── PriceEstimate.tsx
│   ├── payment/
│   │   ├── PaymentMethodSelector.tsx
│   │   ├── WalletCard.tsx
│   │   └── PaymentConfirmation.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── BottomNav.tsx
│       └── Sidebar.tsx
├── pages/
│   ├── Home.tsx
│   ├── RideRequest.tsx
│   ├── RideTracking.tsx
│   ├── RideHistory.tsx
│   ├── Profile.tsx
│   ├── Wallet.tsx
│   └── Settings.tsx
├── hooks/
│   ├── useLocation.ts
│   ├── useRide.ts
│   └── usePayment.ts
├── services/
│   ├── api.ts
│   ├── geolocation.ts
│   └── payment/
│       ├── kushki.ts
│       ├── deuna.ts
│       └── pagoefectivo.ts
├── types/
│   ├── ride.ts
│   ├── vehicle.ts
│   ├── user.ts
│   └── payment.ts
└── utils/
    ├── formatters.ts
    └── validators.ts
```

---

## 5. Especificación UI/UX (Estilo Uber + Pedidos Ya)

### 5.1 Paleta de Colores

```css
:root {
  /* Colores Primarios - Inspirados en la Amazonía */
  --primary: #00A86B;        /* Verde Amazonía */
  --primary-dark: #007A4D;
  --primary-light: #00C77B;
  
  /* Colores de Acento */
  --accent: #FF6B35;         /* Naranja Atardecer Oriente */
  --accent-dark: #E55A2B;
  
  /* Colores de Estado */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
  
  /* Fondos */
  --bg-primary: #0A0A0A;
  --bg-secondary: #121212;
  --bg-card: #1E1E1E;
  --bg-elevated: #252525;
  
  /* Texto */
  --text-primary: #FFFFFF;
  --text-secondary: #A0A0A0;
  --text-muted: #6B6B6B;
  
  /* Bordes */
  --border: #2D2D2D;
  --border-light: #3D3D3D;
}
```

### 5.2 Tipografía

- **Títulos:** DM Sans Bold
- **Cuerpo:** DM Sans Regular
- **Números/Precios:** SF Pro Display (o fuente monospace)
- **Tamaños:**
  - H1: 32px / 700
  - H2: 24px / 600
  - H3: 20px / 600
  - Body: 16px / 400
  - Small: 14px / 400
  - Caption: 12px / 500

### 5.3 Diseño de Pantallas Principales

#### Pantalla Principal (Home)
- **Mapa interactivo** ocupando 60% superior
- **Barra de búsqueda** flotante con efecto glassmorphism
- **Selector de vehículo** horizontal scrollable abajo
- **Botón de acción principal** grande (Uber-style)
- **Bottom navigation** estilo Pedidos Ya

#### Solicitud de Viaje (Ride Request)
- **Animación de búsqueda** de conductor (espirales convergentes)
- **Tarjetas de vehículos** con precio estimado en tiempo real
- **Barra de progreso** indicando estado de búsqueda
- **Opción de negociar precio** (botón flotante)

#### Seguimiento de Viaje (Tracking)
- **Mapa en tiempo real** con ruta dibujada
- **Información del conductor** con foto, nombre, placa
- **Datos del vehículo** (modelo, color)
- **Tiempo estimado de llegada** prominente
- **Botón de emergencia** visible

#### Perfil y Billetera
- **Estadísticas de usuario** (viajes, kilómetros, rating)
- **Métodos de pago** en cards estilizadas
- **Historial de viajes** con filtros
- **Configuración de preferencias**

---

## 6. Funcionalidades Clave

### 6.1 Para Usuarios

- [ ] Registro/Login con teléfono (Ecuador)
- [ ] Ubicación en tiempo real
- [ ] Solicitar viaje en 3 pasos
- [ ] Seleccionar tipo de vehículo
- [ ] Ver precio estimado antes de confirmar
- [ ] Negociar precio con conductor
- [ ] Seguimiento en tiempo real del conductor
- [ ] Gestión de métodos de pago
- [ ] Historial de viajes
- [ ] Calificar conductor
- [ ] Soporte en tiempo real

### 6.2 Para Conductores (Futuro)

- [ ] Panel de conductor
- [ ] Aceptar/ Rechazar solicitudes
- [ ] Navegación integrada
- [ ] Gestión de ganancias

---

## 7. Integraciones de API

### 7.1 Geolocalización

- Google Maps API o Mapbox para mapas
- Geocoding para direcciones
- Directions API para rutas

### 7.2 Pagos

- **Kushki:** Procesamiento de tarjetas
- **DeUna:** Billetera digital
- **PagoEfectivo:** Pagos en efectivo

---

## 8. Regiones y Cobertura

### 8.1 Provincias del Oriente

```
Pastaza:    Puyo, Mera, Shell
Napo:       Tena, Archidona, Loreto
Orellana:   Francisco de Orellana, Coca
Sucumbíos:  Lago Agrio, Nueva Loja, Shushufindi
Morona:     Macas, Gualaquiza, Sucúa
Zamora:     Zamora, Yantzaza, El Pangui
```

### 8.2 Rutas Principales

- Puyo - Tena (Carretera)
- Puyo - Macas (Carretera)
- Tena - Coca (Carretera)
- Cruces fluvionales (Lancha)

---

## 9. Idiomas

- Español (es) - Principal
- English (en) - Secundario
- Quechua/Kichua (qu) - Nativo

---

## 10. Consideraciones Técnicas

- **Framework:** React + TypeScript + Vite
- **Estado:** Zustand o Context API
- **Mapas:** Mapbox GL JS
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Material Symbols

---

*Documento creado para desarrollo de ORIENT🚗 - Transporte para el Oriente Ecuatoriano*
