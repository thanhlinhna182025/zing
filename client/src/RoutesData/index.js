import configs from '~/configs'
import MainLayout from '~/layouts/MainLayout'
import Album from '~/pages/Album'
import Discovery from '~/pages/Discovery'
import Follow from '~/pages/Follow'
import Home from '~/pages/Home'
import ListMV from '~/pages/ListMV'
import Login from '~/pages/Login'
import NewMusic from '~/pages/NewMusic'
import NewReleaseAlbum from '~/pages/NewReleaseAlbum'
import NewReleaseSong from '~/pages/NewReleaseSong'
import PlayList from '~/pages/PlayList'
import Radio from '~/pages/Radio'
import Singer from '~/pages/Singer'
import Top100 from '~/pages/Top100'
import TypeMusic from '~/pages/TypeMusic'
import VideoClip from '~/pages/VideoClip'
import ZingChart from '~/pages/ZingChart'

const PublicRoutes = [
  {
    path: configs.routes.home,
    element: Home,
    layout: MainLayout
  },
  {
    path: configs.routes.login,
    element: Login,
    layout: MainLayout
  },

  {
    path: configs.routes.discovery,
    element: Discovery,
    layout: MainLayout
  },
  {
    path: configs.routes.follow,
    element: Follow,
    layout: MainLayout
  },
  {
    path: configs.routes.newMusic,
    element: NewMusic,
    layout: MainLayout
  },
  {
    path: configs.routes.typeMusic,
    element: TypeMusic,
    layout: MainLayout
  },
  {
    path: configs.routes.top100,
    element: Top100,
    layout: MainLayout
  },
  {
    path: configs.routes.listmv,
    element: ListMV,
    layout: MainLayout
  },
  {
    path: configs.routes.video,
    element: VideoClip,
    layout: null
  },
  {
    path: configs.routes.album,
    element: Album,
    layout: MainLayout
  },
  {
    path: configs.routes.singer,
    element: Singer,
    layout: MainLayout
  },
  {
    path: configs.routes.playlist,
    element: PlayList,
    layout: MainLayout
  },
  {
    path: configs.routes.radio,
    element: Radio,
    layout: null
  },
  {
    path: configs.routes.zingchart,
    element: ZingChart,
    layout: MainLayout
  },
  {
    path: configs.routes.newreleaseSong,
    element: NewReleaseSong,
    layout: MainLayout
  },
  {
    path: configs.routes.newreleaseAlbum,
    element: NewReleaseAlbum,
    layout: MainLayout
  }
]

const PrivateRoute = []

export { PublicRoutes, PrivateRoute }
