
export const getUser = (token) => `v1/auth/user?token=${token?.replace(/\r?\n|\r/g, '')}`
export const homeBanner = 'v1/banners/home'
export const home = 'v1/home'
export const homeV2 = 'v1/homev2'
export const homeFull = 'v1/home-full'
export const homeWithColor = 'v1/with-color'
export const MapBoxSearch = 'v1/merchants'
export const baseGroup = 'v1/base-full'
export const LogViewRoutes = 'v1/log/view/routes'
export const AddCustomerVoice = 'v1/customer-voice/add'
export const CustomersVoicesList = 'v1/customers-voices'
export const InstallerRegisterRR = 'v1/installer/register'
export const InstallerGetRR = 'v1/installer/get'
export const AvatarUpdateRR = 'v1/auth/profile/update/image'
export const CustomersAddVoices = 'v1/customers-voices/add'
export const GetsAdverts = 'v1/advertisings/get'
export const ManufacturerCreate = 'v1/manufacturer/create'
export const ManufacturerFound = 'v1/manufacturer/found'
export const FavoritesProducts = 'v1/favorites/products'
export const SearchDecorRR = 'v1/search-decors'
export const getCountStatistics = 'v1/get-count-statistics'
export const productsDevices = 'v1/products-device'
export const getDataWallet = 'v1/wallet'
export const PayWallet = 'v1/pay/wallet'
export const referralCreate = 'v1/referral/create'
export const getInvitationUser = 'v1/invitation/get'
export const authLoginV2 = 'v1/auth/login-v2'

export const getTopViewWithCategory = (category_slug) => 'v1/get-top-view/with-category/' + category_slug
export const getNewWithCategory = (category_slug) => 'v1/get-new/with-category/' + category_slug


export const GetCategories = '/v2/categories'
export const PagesFooter = '/v2/pages/footer'

export const LoginTamin = 'http://panel.cerampakhsh.com/login'
export const LoginTaminLocal = 'http://localhost/panel2/login'
const x = '/'
export default x