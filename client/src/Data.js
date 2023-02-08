import chidan from '~/assets/images/chi-dan.png'
import ducphuc from '~/assets/images/duc-phuc.png'
import erik from '~/assets/images/erik.png'
import hoaMinZy from '~/assets/images/hoa-minzy.png'
import huongly from '~/assets/images/huong-ly.png'
import jack from '~/assets/images/jack.png'
import justatee from '~/assets/images/justatee.png'
import karik from '~/assets/images/karik.png'
import mrSiro from '~/assets/images/mr-siro.png'
import onlyC from '~/assets/images/onlyc.png'
import trinhThanhBinh from '~/assets/images/trinh-thanh-binh.png'
import configs from '~/configs'

import {
  DiscoveryIcon,
  FollowIcon,
  MusicBageIcon,
  MVIcon,
  NewMusicIcon,
  RadioIcon,
  Top100Icon,
  TypeMusicIcon,
  ZingChatIcon
} from '~/components/Icons/Icons'

export const ListTop = [
  {
    id: 1,
    path: configs.routes.login,
    icon: MusicBageIcon,
    title: 'Cá Nhân',
    disabled: true
  },
  {
    id: 2,
    path: configs.routes.home,
    icon: DiscoveryIcon,
    title: ' Khám Phá'
  },
  {
    id: 3,
    path: configs.routes.zingchart,
    icon: ZingChatIcon,
    title: '#zingchart',
    playVideoIcon: true
  },
  {
    id: 4,
    path: configs.routes.radio,
    icon: RadioIcon,
    title: 'Radio',
    playVideoIcon: true,
    liveIcon: true,
    disabled: true
  },
  {
    id: 5,
    path: configs.routes.follow,
    icon: FollowIcon,
    title: 'Theo Dõi',
    disabled: true
  }
]
export const ListBottom = [
  {
    id: 6,
    path: configs.routes.newMusic,
    icon: NewMusicIcon,
    title: 'Nhạc Mới',
    playVideoIcon: true
  },
  {
    id: 7,
    path: configs.routes.typeMusic,
    icon: TypeMusicIcon,
    title: ' Thể Loại',
    disabled: true
  },
  {
    id: 8,
    path: configs.routes.top100,
    icon: Top100Icon,
    title: 'Top 100'
  },
  {
    id: 9,
    path: configs.routes.mv,
    icon: MVIcon,
    title: 'MV',
    disabled: true
  }
]

export const artistSpotlightData = [
  {
    id: 1,
    path: '/singer/JustaTee',
    avata: justatee
  },
  {
    id: 2,
    path: '/singer/Chi-Dan',
    avata: chidan
  },
  {
    id: 3,
    path: '/singer/Duc-Phuc',
    avata: ducphuc
  },
  {
    id: 4,
    path: '/singer/erik',
    avata: erik
  },
  {
    id: 5,
    path: '/singer/hoa-minzy',
    avata: hoaMinZy
  },
  {
    id: 6,
    path: '/singer/huong-ly',
    avata: huongly
  },
  {
    id: 7,
    path: '/singer/jack',
    avata: jack
  },
  {
    id: 8,
    path: '/singer/karik',
    avata: karik
  },
  {
    id: 9,
    path: '/singer/mr-siro',
    avata: mrSiro
  },
  {
    id: 10,
    path: '/singer/onlyc',
    avata: onlyC
  },
  {
    id: 11,
    path: '/singer/trinh-thanh-binh',
    avata: trinhThanhBinh
  }
]
