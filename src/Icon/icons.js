import loader from 'uikit/dist/js/uikit-icons.min.js'

import closeIcon from 'uikit/src/images/components/close-icon.svg'
import closeLarge from 'uikit/src/images/components/close-large.svg'
import navbarToggleIcon from 'uikit/src/images/components/navbar-toggle-icon.svg'
import overlayIcon from 'uikit/src/images/components/overlay-icon.svg'
import paginationNext from 'uikit/src/images/components/pagination-next.svg'
import paginationPrevious from 'uikit/src/images/components/pagination-previous.svg'
import searchIcon from 'uikit/src/images/components/search-icon.svg'
import searchLarge from 'uikit/src/images/components/search-large.svg'
import searchNavbar from 'uikit/src/images/components/search-navbar.svg'
import slidenavNext from 'uikit/src/images/components/slidenav-next.svg'
import slidenavNextLarge from 'uikit/src/images/components/slidenav-next-large.svg'
import slidenavPrevious from 'uikit/src/images/components/slidenav-previous.svg'
import slidenavPreviousLarge from 'uikit/src/images/components/slidenav-previous-large.svg'
import spinner from 'uikit/src/images/components/spinner.svg'
import totop from 'uikit/src/images/components/totop.svg'

// base storage for icons
const icons = {}

// Load core icons
loader({ icon: { add: (UIkitIcons) => { Object.assign(icons, UIkitIcons) } } })

// Load component icons
Object.assign(icons, {
  spinner,
  totop,
  'close-icon': closeIcon,
  'close-large': closeLarge,
  'navbar-toggle-icon': navbarToggleIcon,
  'overlay-icon': overlayIcon,
  'pagination-next': paginationNext,
  'pagination-previous': paginationPrevious,
  'search-icon': searchIcon,
  'search-large': searchLarge,
  'search-navbar': searchNavbar,
  'slidenav-next': slidenavNext,
  'slidenav-next-large': slidenavNextLarge,
  'slidenav-previous': slidenavPrevious,
  'slidenav-previous-large': slidenavPreviousLarge,
})

export default icons
