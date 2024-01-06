import type { App } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/faGithubAlt'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons/faCodeFork'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faFolderOpen as farFolderOpen } from '@fortawesome/free-regular-svg-icons/faFolderOpen'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons/faStar'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'
import { faSort } from '@fortawesome/free-solid-svg-icons/faSort'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'

library.add(
  faGithubAlt,
  faSearch,
  faUsers,
  faFolderOpen,
  faCodeFork,
  faUpRightFromSquare,
  faArrowLeft,
  farFolderOpen,
  faStar,
  farStar,
  faCalendarDays,
  faSort,
  faEllipsis,
  faCopy,
)

const registerFontAwesomePlugin = (app: App<Element>) => {
  app.component('FWIcon', FontAwesomeIcon)
}

export default registerFontAwesomePlugin
