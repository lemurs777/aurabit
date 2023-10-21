import MainLayout from './layouts/MainLayout'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import InvestmentPage from './pages/InvestmentPage'
import BountyPage from './pages/BountyPage'
import NewsPage from './pages/NewsPage'
import NewsPage2 from './pages/NewsPage2'
import ContactUsPage from './pages/ContactUsPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import Error from './pages/Error'
import ProfileLayout from './layouts/ProfileLayout'
import DashboardPage from './pages/DashboardPage'
import LockScreen from './pages/LockScreen'
import HelpLayout from './layouts/HelpLayout'
import HelpPage from './pages/HelpPage'
import HelpStartedPage from './pages/HelpStartedPage'
import HelpSecurityPage from './pages/HelpSecurityPage'
import HelpWalletPage from './pages/HelpWalletPage'
import HelpInvestPage from './pages/HelpInvestPage'
import HelpBonusPage from './pages/HelpBonusPage'
import HelpFinancePage from './pages/HelpFinancePage'
import InvestProfilePage from './pages/InvestProfilePage'
import WalletsProfilePage from './pages/WalletsProfilePage'
import StatisticProfilePage from './pages/StatisticProfilePage'
import ProfilePage from './pages/ProfilePage'
import BonusProfilePage from './pages/BonusProfilePage'
import Terms from './pages/Terms/Terms'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/aurabit' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/investment' element={<InvestmentPage />} />
          <Route path='/bounty' element={<BountyPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/news2' element={<NewsPage2 />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Route>
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/lock' element={<LockScreen />} />
        <Route path='profile' element={<ProfileLayout />}>
          <Route index element={<ProfilePage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='invest' element={<InvestProfilePage />} />
          <Route path='wallets' element={<WalletsProfilePage />} />
          <Route path='statistics' element={<StatisticProfilePage />} />
          <Route path='bonus' element={<BonusProfilePage />} />
        </Route>
        <Route path='profile' element={<HelpLayout />}>
          <Route path='help' element={<HelpPage />} />
          <Route path='help/start' element={<HelpStartedPage />} />
          <Route path='help/security' element={<HelpSecurityPage />} />
          <Route path='help/wallets' element={<HelpWalletPage />} />
          <Route path='help/invest' element={<HelpInvestPage />} />
          <Route path='help/bonus' element={<HelpBonusPage />} />
          <Route path='help/faq' element={<HelpFinancePage />} />
        </Route>
        {/*<Route path='*' element={<Error />} />*/}
      </Routes>
    </div>
  )
}

export default App
