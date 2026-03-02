import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Navigation, Star, Clock, CreditCard, 
  User, Settings, Wallet, History, Bell, Menu,
  Phone, MessageCircle, Shield, ChevronRight,
  Car, Bike, Ship, Bus, Truck, Search, X,
  Check, AlertTriangle, ArrowLeft
} from 'lucide-react';
import { translations } from './data/translations';
import { VEHICLE_CATEGORIES, MOCK_DRIVER, SAMPLE_ADDRESSES, calculatePrice, calculateTime } from './data/constants';
import { Language, VehicleType, RideStatus, PaymentMethod, Address } from './types';

// Icons for vehicles
const vehicleIcons: Record<VehicleType, string> = {
  moto: '🏍️',
  carro: '🚗',
  pickup: '🛻',
  van: '🚐',
  lancha: '⛵',
  bus: '🚌',
};

// Payment method icons
const paymentIcons: Record<string, string> = {
  pagoefectivo: '💵',
  kushki: '💳',
  deuna: '📱',
  transfer: '🏦',
  banco: '🏦',
};

type AppView = 'home' | 'select-vehicle' | 'searching' | 'tracking' | 'profile' | 'wallet' | 'history';

function App() {
  const [lang, setLang] = useState<Language>('es');
  const [view, setView] = useState<AppView>('home');
  const [pickup, setPickup] = useState<Address | null>(null);
  const [destination, setDestination] = useState<Address | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | null>(null);
  const [rideStatus, setRideStatus] = useState<RideStatus>('idle');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string>('pagoefectivo');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const t = translations[lang];

  // Mock distance calculation
  const mockDistance = 5.2; // km
  const mockTime = selectedVehicle ? calculateTime(mockDistance, selectedVehicle) : 15;
  const estimatedPrice = selectedVehicle ? calculatePrice(mockDistance, selectedVehicle) : 0;

  const handleConfirmRide = () => {
    setView('searching');
    // Simulate finding a driver
    setTimeout(() => {
      setRideStatus('driver_assigned');
      setTimeout(() => {
        setRideStatus('driver_en_route');
        setView('tracking');
        setTimeout(() => {
          setRideStatus('driver_arrived');
        }, 3000);
      }, 3000);
    }, 3000);
  };

  const handleCancelRide = () => {
    setRideStatus('idle');
    setView('home');
    setPickup(null);
    setDestination(null);
    setSelectedVehicle(null);
  };

  const getVehicleName = (type: VehicleType) => {
    const vehicle = VEHICLE_CATEGORIES.find(v => v.type === type);
    if (!vehicle) return '';
    return lang === 'es' ? vehicle.name : lang === 'en' ? vehicle.nameEn : vehicle.nameQu;
  };

  // Render bottom navigation
  const renderBottomNav = () => (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-dark-800/95 backdrop-blur-xl border-t border-dark-500 px-4 py-2 pb-6 z-50"
    >
      <div className="flex justify-around items-center max-w-md mx-auto">
        <NavButton 
          icon={<MapPin size={24} />} 
          label={t.nav.home} 
          active={view === 'home'}
          onClick={() => setView('home')}
        />
        <NavButton 
          icon={<History size={24} />} 
          label={t.nav.rides} 
          active={view === 'history'}
          onClick={() => setView('history')}
        />
        <NavButton 
          icon={<Wallet size={24} />} 
          label={t.nav.wallet} 
          active={view === 'wallet'}
          onClick={() => setView('wallet')}
        />
        <NavButton 
          icon={<User size={24} />} 
          label={t.nav.profile} 
          active={view === 'profile'}
          onClick={() => setView('profile')}
        />
      </div>
    </motion.div>
  );

  // Render home view
  const renderHome = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-4 pt-12 pb-4 bg-dark-900/80 backdrop-blur-xl border-b border-dark-500/50 sticky top-0 z-40"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amazon-500 to-amazon-600 flex items-center justify-center shadow-lg shadow-amazon-500/30">
              <Car className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ORIENT<span className="text-amazon-500">🚗</span></h1>
              <p className="text-xs text-dark-400">{t.app.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
            >
              <span className="text-sm">{lang === 'es' ? '🇪🇸' : lang === 'en' ? '🇺🇸' : '🇵🇪'}</span>
            </button>
            <button className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors">
              <Bell size={20} className="text-dark-300" />
            </button>
          </div>
        </div>

        {/* Language menu */}
        <AnimatePresence>
          {showLanguageMenu && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-20 right-4 bg-dark-700 rounded-xl border border-dark-500 p-2 z-50"
            >
              <button 
                onClick={() => { setLang('es'); setShowLanguageMenu(false); }}
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${lang === 'es' ? 'bg-amazon-500/20 text-amazon-400' : 'hover:bg-dark-600'}`}
              >
                <span>🇪🇸</span> Español
              </button>
              <button 
                onClick={() => { setLang('en'); setShowLanguageMenu(false); }}
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${lang === 'en' ? 'bg-amazon-500/20 text-amazon-400' : 'hover:bg-dark-600'}`}
              >
                <span>🇺🇸</span> English
              </button>
              <button 
                onClick={() => { setLang('qu'); setShowLanguageMenu(false); }}
                className={`flex items-center gap-2 w-full p-2 rounded-lg ${lang === 'qu' ? 'bg-amazon-500/20 text-amazon-400' : 'hover:bg-dark-600'}`}
              >
                <span>🇵🇪</span> Quechua
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search box */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
          <input 
            type="text"
            placeholder={t.home.where}
            className="w-full bg-dark-800 border border-dark-500 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-amazon-500"
          />
        </div>
      </motion.div>

      {/* Map placeholder */}
      <div className="flex-1 relative bg-dark-950 overflow-hidden">
        <div className="absolute inset-0 map-container">
          {/* Mock map background */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00A86B" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Quick actions overlay */}
        <div className="absolute top-4 left-4 right-4">
          <div className="flex gap-2">
            <button className="flex-1 py-2 px-4 bg-dark-700/90 backdrop-blur rounded-xl border border-dark-500/50 flex items-center justify-center gap-2 hover:bg-dark-600 transition-colors">
              <MapPin size={16} className="text-amazon-400" />
              <span className="text-sm text-white">{t.home.pickup}</span>
            </button>
            <button className="flex-1 py-2 px-4 bg-dark-700/90 backdrop-blur rounded-xl border border-dark-500/50 flex items-center justify-center gap-2 hover:bg-dark-600 transition-colors">
              <Navigation size={16} className="text-sunset-400" />
              <span className="text-sm text-white">{t.home.destination}</span>
            </button>
          </div>
        </div>

        {/* Floating address cards */}
        <div className="absolute bottom-32 left-4 right-4 space-y-2">
          <h3 className="text-sm font-semibold text-dark-300 mb-2">{t.home.recentPlaces}</h3>
          {SAMPLE_ADDRESSES.map((addr) => (
            <motion.button
              key={addr.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setDestination(addr); setView('select-vehicle'); }}
              className="w-full p-3 bg-dark-700/90 backdrop-blur-xl rounded-xl border border-dark-500/50 flex items-center gap-3 hover:bg-dark-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-dark-600 flex items-center justify-center">
                <MapPin size={18} className="text-amazon-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-white">{addr.name}</p>
                <p className="text-xs text-dark-400">{addr.description}</p>
              </div>
              <ChevronRight size={18} className="text-dark-400" />
            </motion.button>
          ))}
        </div>
      </div>

      {renderBottomNav()}
    </div>
  );

  // Render vehicle selection
  const renderVehicleSelection = () => (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 bg-dark-900 z-50"
    >
      {/* Header */}
      <div className="px-4 pt-12 pb-4 bg-dark-800 border-b border-dark-500">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-white mb-4"
        >
          <ArrowLeft size={20} />
          <span>{t.common.back}</span>
        </button>
        
        {/* Route summary */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amazon-400"></div>
            <span className="text-white">{t.home.pickup}: Puyo Centro</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-sunset-400"></div>
            <span className="text-white">{destination?.name || 'Destino'}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-dark-400 pt-2 border-t border-dark-500">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {mockTime} {t.ride.minutes}
            </span>
            <span className="flex items-center gap-1">
              <Navigation size={14} /> {mockDistance} {t.ride.kilometers}
            </span>
          </div>
        </div>
      </div>

      {/* Vehicle list */}
      <div className="p-4 pb-32 overflow-y-auto h-full">
        <h2 className="text-lg font-semibold text-white mb-4">{t.vehicles.title}</h2>
        
        <div className="space-y-3">
          {VEHICLE_CATEGORIES.map((vehicle) => (
            <motion.button
              key={vehicle.type}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setSelectedVehicle(vehicle.type); setShowPaymentModal(true); }}
              className={`w-full p-4 rounded-2xl border flex items-center gap-4 transition-all ${
                selectedVehicle === vehicle.type 
                  ? 'bg-amazon-500/10 border-amazon-500' 
                  : 'bg-dark-700/50 border-dark-500 hover:border-dark-400'
              }`}
            >
              <div className="text-4xl">{vehicle.icon}</div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-white">
                  {lang === 'es' ? vehicle.name : lang === 'en' ? vehicle.nameEn : vehicle.nameQu}
                </p>
                <p className="text-sm text-dark-400">{vehicle.description}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Star size={12} className="text-yellow-400" fill="currentColor" />
                  <span className="text-xs text-dark-400">4.8</span>
                  <span className="text-xs text-dark-500">•</span>
                  <span className="text-xs text-amazon-400">{vehicle.capacity} {t.vehicles.perPerson}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-white">${calculatePrice(mockDistance, vehicle.type).toFixed(2)}</p>
                <p className="text-xs text-dark-400">{t.ride.estimate}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Payment modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end"
          >
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="w-full bg-dark-800 rounded-t-3xl p-6 pb-8"
            >
              <div className="w-12 h-1 bg-dark-500 rounded-full mx-auto mb-4"></div>
              
              <h3 className="text-xl font-bold text-white mb-4">{t.payment.title}</h3>
              
              <div className="space-y-2 mb-6">
                {[
                  { id: 'pagoefectivo', name: t.payment.efectivo, desc: t.payment.efectivoDesc, icon: '💵' },
                  { id: 'kushki', name: t.payment.kushki, desc: t.payment.kushkiDesc, icon: '💳' },
                  { id: 'deuna', name: t.payment.deuna, desc: t.payment.deunaDesc, icon: '📱' },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all ${
                      selectedPayment === method.id
                        ? 'bg-amazon-500/20 border-amazon-500'
                        : 'bg-dark-700 border-dark-500 hover:border-dark-400'
                    } border`}
                  >
                    <span className="text-2xl">{method.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="font-semibold text-white">{method.name}</p>
                      <p className="text-xs text-dark-400">{method.desc}</p>
                    </div>
                    {selectedPayment === method.id && (
                      <Check size={20} className="text-amazon-400" />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 py-4 rounded-xl bg-dark-700 text-white font-semibold"
                >
                  {t.common.cancel}
                </button>
                <button 
                  onClick={handleConfirmRide}
                  className="flex-1 py-4 rounded-xl bg-amazon-500 text-white font-semibold shadow-lg shadow-amazon-500/30"
                >
                  {t.ride.confirmRide} - ${estimatedPrice.toFixed(2)}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  // Render searching view
  const renderSearching = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-dark-900 z-50 flex flex-col items-center justify-center"
    >
      <div className="relative w-40 h-40">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full bg-amazon-500/20 animate-ping"></div>
        <div className="absolute inset-4 rounded-full bg-amazon-500/30 animate-pulse"></div>
        <div className="absolute inset-8 rounded-full bg-amazon-500/40 animate-pulse delay-75"></div>
        
        {/* Car icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Car size={48} className="text-amazon-400" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mt-8">{t.ride.searching}</h2>
      <p className="text-dark-400 mt-2">{destination?.name}</p>
      
      <button 
        onClick={handleCancelRide}
        className="mt-12 px-8 py-3 rounded-xl border border-red-500/50 text-red-400 hover:bg-red-500/10"
      >
        {t.ride.cancelRide}
      </button>
    </motion.div>
  );

  // Render tracking view
  const renderTracking = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-dark-900 z-50"
    >
      {/* Map area */}
      <div className="h-2/3 relative bg-dark-950">
        <div className="absolute inset-0 map-container opacity-30"></div>
        
        {/* Status banner */}
        <div className="absolute top-12 left-4 right-4">
          <div className="bg-dark-800/90 backdrop-blur-xl rounded-2xl p-4 border border-dark-500">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amazon-500/20 flex items-center justify-center">
                <Car size={24} className="text-amazon-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold">
                  {rideStatus === 'driver_en_route' ? t.ride.driverEnRoute : 
                   rideStatus === 'driver_arrived' ? t.ride.driverArrived : 
                   t.ride.driverFound}
                </p>
                <p className="text-dark-400 text-sm">{mockTime} {t.ride.minutes}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">${estimatedPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Driver info card */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-dark-800/90 backdrop-blur-xl rounded-2xl p-4 border border-dark-500">
            <div className="flex items-center gap-4">
              <img 
                src={MOCK_DRIVER.avatar} 
                alt={MOCK_DRIVER.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-amazon-500"
              />
              <div className="flex-1">
                <p className="text-white font-semibold text-lg">{MOCK_DRIVER.name}</p>
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-yellow-400" fill="currentColor" />
                  <span className="text-white">{MOCK_DRIVER.rating}</span>
                  <span className="text-dark-400">•</span>
                  <span className="text-dark-400">{MOCK_DRIVER.totalTrips} {t.driver.trips}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-dark-300 text-sm">{MOCK_DRIVER.vehicle.model}</span>
                  <span className="text-dark-500">•</span>
                  <span className="text-amazon-400 font-semibold">{MOCK_DRIVER.vehicle.plate}</span>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-3 bg-dark-700 rounded-xl flex items-center justify-center gap-2 hover:bg-dark-600 transition-colors">
                <Phone size={18} className="text-amazon-400" />
                <span className="text-white">{t.ride.contactDriver}</span>
              </button>
              <button className="flex-1 py-3 bg-dark-700 rounded-xl flex items-center justify-center gap-2 hover:bg-dark-600 transition-colors">
                <MessageCircle size={18} className="text-amazon-400" />
              </button>
              <button className="px-4 py-3 bg-red-500/20 border border-red-500/50 rounded-xl flex items-center justify-center">
                <Shield size={18} className="text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-1/3 bg-dark-800 p-4">
        <button 
          onClick={handleCancelRide}
          className="w-full py-3 rounded-xl border border-red-500/50 text-red-400 hover:bg-red-500/10"
        >
          {t.ride.cancelRide}
        </button>
      </div>
    </motion.div>
  );

  // Render profile view
  const renderProfile = () => (
    <div className="flex flex-col h-full bg-dark-900">
      <div className="px-4 pt-12 pb-4 bg-dark-800 border-b border-dark-500">
        <h1 className="text-2xl font-bold text-white">{t.profile.title}</h1>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto pb-24">
        {/* User card */}
        <div className="bg-dark-700 rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amazon-500 to-amazon-600 flex items-center justify-center text-3xl font-bold text-white">
              A
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Usuario Demo</h2>
              <p className="text-dark-400">+593 99 123 4567</p>
              <div className="flex items-center gap-2 mt-1">
                <Star size={14} className="text-yellow-400" fill="currentColor" />
                <span className="text-white font-semibold">4.9</span>
                <span className="text-dark-400 text-sm">(125 {t.profile.trips})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-dark-700 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-amazon-400">125</p>
            <p className="text-xs text-dark-400">{t.profile.trips}</p>
          </div>
          <div className="bg-dark-700 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-sunset-400">$1,240</p>
            <p className="text-xs text-dark-400">{t.profile.spent}</p>
          </div>
          <div className="bg-dark-700 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">4.9</p>
            <p className="text-xs text-dark-400">{t.profile.rating}</p>
          </div>
        </div>

        {/* Menu items */}
        <div className="space-y-2">
          {[
            { icon: <MapPin size={20} />, label: t.profile.myAddresses, color: 'amazon' },
            { icon: <CreditCard size={20} />, label: t.payment.title, color: 'sunset' },
            { icon: <Clock size={20} />, label: t.nav.rides, color: 'blue' },
            { icon: <Bell size={20} />, label: t.settings.notifications, color: 'yellow' },
            { icon: <Settings size={20} />, label: t.settings.title, color: 'gray' },
          ].map((item, i) => (
            <button 
              key={i}
              className="w-full p-4 bg-dark-700 rounded-xl flex items-center gap-4 hover:bg-dark-600 transition-colors"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                item.color === 'amazon' ? 'bg-amazon-500/20 text-amazon-400' :
                item.color === 'sunset' ? 'bg-sunset-500/20 text-sunset-400' :
                item.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {item.icon}
              </div>
              <span className="flex-1 text-left text-white font-medium">{item.label}</span>
              <ChevronRight size={18} className="text-dark-400" />
            </button>
          ))}
        </div>
      </div>

      {renderBottomNav()}
    </div>
  );

  // Render wallet view
  const renderWallet = () => (
    <div className="flex flex-col h-full bg-dark-900">
      <div className="px-4 pt-12 pb-4 bg-gradient-to-b from-amazon-500/20 to-transparent border-b border-dark-500">
        <h1 className="text-2xl font-bold text-white">{t.nav.wallet}</h1>
        <p className="text-dark-400 text-sm">{t.payment.title}</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto pb-24">
        {/* Balance card */}
        <div className="bg-gradient-to-br from-amazon-600 to-amazon-700 rounded-2xl p-6 mb-6 shadow-xl shadow-amazon-500/20">
          <p className="text-white/80 text-sm">{t.profile.spent}</p>
          <p className="text-4xl font-bold text-white">$24.50</p>
          <div className="flex items-center gap-2 mt-4">
            <div className="status-online"></div>
            <span className="text-white/80 text-sm">Disponible</span>
          </div>
        </div>

        {/* Payment methods */}
        <h3 className="text-lg font-semibold text-white mb-3">{t.payment.title}</h3>
        <div className="space-y-2">
          {[
            { id: 'efectivo', name: t.payment.efectivo, desc: t.payment.efectivoDesc, icon: '💵', default: true },
            { id: 'kushki', name: t.payment.kushki, desc: '**** 4521', icon: '💳', default: false },
            { id: 'deuna', name: t.payment.deuna, desc: t.payment.deunaDesc, icon: '📱', default: false },
          ].map((method) => (
            <button 
              key={method.id}
              className="w-full p-4 bg-dark-700 rounded-xl flex items-center gap-4 hover:bg-dark-600 transition-colors"
            >
              <span className="text-2xl">{method.icon}</span>
              <div className="flex-1 text-left">
                <p className="text-white font-semibold">{method.name}</p>
                <p className="text-xs text-dark-400">{method.desc}</p>
              </div>
              {method.default && (
                <span className="px-2 py-1 bg-amazon-500/20 text-amazon-400 text-xs rounded-full">Default</span>
              )}
            </button>
          ))}
          
          <button className="w-full p-4 border-2 border-dashed border-dark-500 rounded-xl flex items-center justify-center gap-2 text-dark-400 hover:border-dark-400 hover:text-white transition-colors">
            <CreditCard size={20} />
            {t.payment.addMethod}
          </button>
        </div>
      </div>

      {renderBottomNav()}
    </div>
  );

  // Render history view
  const renderHistory = () => (
    <div className="flex flex-col h-full bg-dark-900">
      <div className="px-4 pt-12 pb-4 bg-dark-800 border-b border-dark-500">
        <h1 className="text-2xl font-bold text-white">{t.nav.rides}</h1>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto pb-24">
        {/* Sample history items */}
        {[
          { date: 'Hoy', destination: 'Puyo Centro', price: '$8.50', vehicle: 'carro' },
          { date: 'Ayer', destination: 'Mercado Central', price: '$4.20', vehicle: 'moto' },
          { date: '20 Feb', destination: 'Aeropuerto', price: '$15.00', vehicle: 'pickup' },
        ].map((ride, i) => (
          <div key={i} className="bg-dark-700 rounded-xl p-4 mb-3 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-dark-600 flex items-center justify-center text-2xl">
              {vehicleIcons[ride.vehicle as VehicleType]}
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold">{ride.destination}</p>
              <p className="text-xs text-dark-400">{ride.date}</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">{ride.price}</p>
              <p className="text-xs text-amazon-400">{t.ride.completed}</p>
            </div>
          </div>
        ))}
      </div>

      {renderBottomNav()}
    </div>
  );

  return (
    <div className="h-screen bg-dark-900 overflow-hidden">
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {renderHome()}
          </motion.div>
        )}
        
        {view === 'select-vehicle' && (
          <motion.div key="select-vehicle">
            {renderVehicleSelection()}
          </motion.div>
        )}
        
        {view === 'searching' && (
          <motion.div key="searching">
            {renderSearching()}
          </motion.div>
        )}
        
        {view === 'tracking' && (
          <motion.div key="tracking">
            {renderTracking()}
          </motion.div>
        )}
        
        {view === 'profile' && (
          <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {renderProfile()}
          </motion.div>
        )}
        
        {view === 'wallet' && (
          <motion.div key="wallet" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {renderWallet()}
          </motion.div>
        )}
        
        {view === 'history' && (
          <motion.div key="history" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {renderHistory()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Navigation button component
function NavButton({ icon, label, active, onClick }: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
        active 
          ? 'text-amazon-400' 
          : 'text-dark-400 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

export default App;
