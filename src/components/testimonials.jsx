import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/login'
import Register from './components/register'
import Profile from './components/profile'
import BoardUser from './components/boardUser'
import BoardAnalyste from './components/boardAnalyste'
import BoardAdmin from './components/boardAdmin'
import BoardPrestataire from './components/bordPrestataire'
import { logout } from './actions/auth'
import { clearMessage } from './actions/message'
import { history } from './helpers/history'
//components
import Patient from './components/patient'
import Home from './components/home.cp'
import EditProfil from './components/editprofil'
import AddTraitement from './components/traitement/add.cp'
import EditTraitement from './components/traitement/edit.cp'
import ShowTraitements from './components/traitement/list.cp'
import AddRend from './components/rendvous/add.cp'
import EditRend from './components/rendvous/edit.cp'
import ShowRends from './components/rendvous/list.cp'
import AddPrise from './components/prise_en_charge/add.cp'

import EditPrise from './components/prise_en_charge/edit.cp'
import ShowPrises from './components/prise_en_charge/list.cp'
import ShowPriseSeances from './components/prise_en_charge/list_seance.cp'
import AddBord from './components/bord/add.cp'
import EditBord from './components/bord/edit.cp'
import ShowBords from './components/bord/list.cp'
import ShowFactureBords from './components/bord/liste_facture.cp'
import ShowFactureAffect from './components/bord/factures_nonaffect.cp'
import AddFacture from './components/facture/add.cp'
import EditFacture from './components/facture/edit.cp'
import ShowFactures from './components/facture/list.cp'
import AddExercice from './components/exercice/add.cp'
import EditExercice from './components/exercice/edit.cp'
import ShowExercices from './components/exercice/list.cp'
import AddSeance from './components/seance/add.cp'
import EditSeance from './components/seance/edit.cp'
import ShowSeances from './components/seance/list.cp'
import AddEmploye from './components/employe/add.cp'
import EditEmploye from './components/employe/edit.cp'
import ShowEmployes from './components/employe/list.cp'
import ShowUsers from './components/utilisateur/list.cp'
// import AddProduit from './components/produit/add.cp'
// import EditProduit from './components/produit/edit.cp'
// import ShowProduits from './components/produit/list.cp'
const App = () => {
  const navigate = useNavigate()
  const [showPrestataireBoard, setShowPrestataireBoard] = useState(false)
  const [showAnalysteBoard, setShowAnalysteBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const { user: currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()) // clear message when changing location
    })
  }, [dispatch])
  useEffect(() => {
    if (currentUser) {
      setShowAnalysteBoard(currentUser.roles.includes('ROLE_ANALYSTE'))
      setShowAdminBoard(currentUser.roles.includes('ROLE_ADMIN'))
    }
  }, [currentUser])
  //   if (currentUser.profil !=2){
  //      dispatch(logout())
  //  }
  const logOut = () => {
    dispatch(logout()).then(() => {
      navigate('/home')
    })
  }
  return (
    <>
      <div id='app' className='all-wrapper with-side-panel solid-bg-all'>
        <div
          aria-hidden='true'
          className='onboarding-modal modal fade animated show-on-load'
          role='dialog'
          tabindex='-1'
        >
          <div className='modal-dialog modal-centered' role='document'>
            <div className='modal-content text-center'>
              <button
                aria-label='Close'
                className='close'
                data-dismiss='modal'
                type='button'
              >
                <span className='close-label'>Skip Intro</span>
                <span className='os-icon os-icon-close'></span>
              </button>
              <div className='onboarding-slider-w'>
                <div className='onboarding-slide'>
                  <div className='onboarding-media'>
                    <img alt='' src='img/bigicon2.png' width='200px' />
                  </div>
                  <div className='onboarding-content with-gradient'>
                    <h4 className='onboarding-title'>
                      Example of onboarding screen!
                    </h4>
                    <div className='onboarding-text'>
                      This is an example of a multistep onboarding screen, you
                      can use it to introduce your customers to your app, or
                      collect additional information from them before they start
                      using your app.
                    </div>
                  </div>
                </div>
                <div className='onboarding-slide'>
                  <div className='onboarding-media'>
                    <img alt='' src='img/bigicon5.png' width='200px' />
                  </div>
                  <div className='onboarding-content with-gradient'>
                    <h4 className='onboarding-title'>
                      Example Request Information
                    </h4>
                    <div className='onboarding-text'>
                      In this example you can see a form where you can request
                      some additional information from the customer when they
                      land on the app page.
                    </div>
                    <form>
                      <div className='row'>
                        <div className='col-sm-6'>
                          <div className='form-group'>
                            <label for=''>Your Full Name</label>
                            <input
                              className='form-control'
                              placeholder='Enter your full name...'
                              type='text'
                              value=''
                            />
                          </div>
                        </div>
                        <div className='col-sm-6'>
                          <div className='form-group'>
                            <label for=''>Your Role</label>
                            <select className='form-control'>
                              <option>Web Developer</option>
                              <option>Business Owner</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='onboarding-slide'>
                  <div className='onboarding-media'>
                    <img alt='' src='img/bigicon6.png' width='200px' />
                  </div>
                  <div className='onboarding-content with-gradient'>
                    <h4 className='onboarding-title'>Showcase App Features</h4>
                    <div className='onboarding-text'>
                      In this example you can showcase some of the features of
                      your application, it is very handy to make new users aware
                      of your hidden features. You can use boostrap columns to
                      split them up.
                    </div>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <ul className='features-list'>
                          <li>Fully Responsive design</li>
                          <li>Pre-built app layouts</li>
                          <li>Incredible Flexibility</li>
                        </ul>
                      </div>
                      <div className='col-sm-6'>
                        <ul className='features-list'>
                          <li>Boxed Full Layouts</li>
                          <li>Based on Bootstrap 4</li>
                          <li>Developer Friendly </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='search-with-suggestions-w'>
          <div className='search-with-suggestions-modal'>
            <div className='search-suggestions-group'>
              <div className='ssg-header'>
                <div className='ssg-icon'>
                  <div className='os-icon os-icon-box'></div>
                </div>
                <div className='ssg-name'>Projects</div>
                <div className='ssg-info'>24 Total</div>
              </div>
              <div className='ssg-content'>
                <div className='ssg-items ssg-items-boxed'>
                  <a className='ssg-item' href='users_profile_big.html'>
                    <div className='item-media'></div>
                    <div className='item-name'>
                      Integ<span>ration</span> with API
                    </div>
                  </a>
                  <a className='ssg-item' href='users_profile_big.html'>
                    <div className='item-media'></div>
                    <div className='item-name'>
                      Deve<span>lopm</span>ent Project
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='search-suggestions-group'>
              <div className='ssg-header'>
                <div className='ssg-icon'>
                  <div className='os-icon os-icon-users'></div>
                </div>
                <div className='ssg-name'>Customers</div>
                <div className='ssg-info'>12 Total</div>
              </div>
              <div className='ssg-content'>
                <div className='ssg-items ssg-items-list'>
                  <a className='ssg-item' href='users_profile_big.html'>
                    <div className='item-media'></div>
                    <div className='item-name'>
                      John Ma<span>yer</span>s
                    </div>
                  </a>
                  <a className='ssg-item' href='users_profile_big.html'>
                    <div className='item-media'></div>
                    <div className='item-name'>
                      Th<span>omas</span> Mullier
                    </div>
                  </a>
                  <a className='ssg-item' href='users_profile_big.html'>
                    <div className='item-media'></div>
                    <div className='item-name'>
                      Kim C<span>olli</span>ns
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='search-suggestions-group'>
              <div className='ssg-header'>
                <div className='ssg-icon'>
                  <div className='os-icon os-icon-folder'></div>
                </div>
                <div className='ssg-name'>Files</div>
                <div className='ssg-info'>17 Total</div>
              </div>
              <div className='ssg-content'>
                <div className='ssg-items ssg-items-blocks'>
                  <a className='ssg-item' href='#'>
                    <div className='item-icon'>
                      <i className='os-icon os-icon-file-text'></i>
                    </div>
                    <div className='item-name'>
                      Work<span>Not</span>e.txt
                    </div>
                  </a>
                  <a className='ssg-item' href='#'>
                    <div className='item-icon'>
                      <i className='os-icon os-icon-film'></i>
                    </div>
                    <div className='item-name'>
                      V<span>ideo</span>.avi
                    </div>
                  </a>
                  <a className='ssg-item' href='#'>
                    <div className='item-icon'>
                      <i className='os-icon os-icon-database'></i>
                    </div>
                    <div className='item-name'>
                      User<span>Tabl</span>e.sql
                    </div>
                  </a>
                  <a className='ssg-item' href='#'>
                    <div className='item-icon'>
                      <i className='os-icon os-icon-image'></i>
                    </div>
                    <div className='item-name'>
                      wed<span>din</span>g.jpg
                    </div>
                  </a>
                </div>
                <div className='ssg-nothing-found'>
                  <div className='icon-w'>
                    <i className='os-icon os-icon-eye-off'></i>
                  </div>
                  <span>No files were found. Try changing your query...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='layout-w'>
          <div className='menu-mobile menu-activated-on-click color-scheme-dark'>
            <div className='mm-logo-buttons-w'>
              <Link to={'/home'}>
                <a className='mm-logo' href=''>
                  <img src='assets/img/logo.png' />
                  <span>LeKiné</span>
                </a>
              </Link>
              <div className='mm-buttons'>
                <div className='content-panel-open'>
                  <div className='os-icon os-icon-grid-circles'></div>
                </div>
                <div className='mobile-menu-trigger'>
                  <div className='os-icon os-icon-hamburger-menu-1'></div>
                </div>
              </div>
            </div>
            <div className='menu-and-user'>
              <div className='logged-user-w'>
                <div className='avatar-w'>
                  <img alt='' src='img/avatar1.jpg' />
                </div>
                <div className='logged-user-info-w'>
                  <div className='logged-user-name'>
                    <strong>{currentUser.login}</strong>
                  </div>
                  <div className='logged-user-role'>{currentUser.login}</div>
                </div>
              </div>

              <ul className='main-menu'>
                <li className='has-sub-menu'>
                  <a href=''>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-layout'></div>
                    </div>
                    <span>Dashboard</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='.html'>Dashboard 1</a>
                    </li>
                    <li>
                      <a href='apps_crypto.html'>
                        Crypto Dashboard{' '}
                        <strong className='badge badge-danger'>Hot</strong>
                      </a>
                    </li>
                    <li>
                      <a href='apps_support_dashboard.html'>Dashboard 3</a>
                    </li>
                    <li>
                      <a href='apps_projects.html'>Dashboard 4</a>
                    </li>
                    <li>
                      <a href='apps_bank.html'>Dashboard 5</a>
                    </li>
                    <li>
                      <a href='layouts_menu_top_image.html'>Dashboard 6</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='layouts_menu_top_image.html'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-layers'></div>
                    </div>
                    <span>Menu Styles</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='layouts_menu_side_full.html'>Side Menu Light</a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_full_dark.html'>
                        Side Menu Dark
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_transparent.html'>
                        Side Menu Transparent{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='apps_pipeline.html'>Side &amp; Top Dark</a>
                    </li>
                    <li>
                      <a href='apps_projects.html'>Side &amp; Top</a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_mini.html'>Mini Side Menu</a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_mini_dark.html'>
                        Mini Menu Dark
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_compact.html'>
                        Compact Side Menu
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_compact_dark.html'>
                        Compact Menu Dark
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_right.html'>Right Menu</a>
                    </li>
                    <li>
                      <a href='layouts_menu_top.html'>Top Menu Light</a>
                    </li>
                    <li>
                      <a href='layouts_menu_top_dark.html'>Top Menu Dark</a>
                    </li>
                    <li>
                      <a href='layouts_menu_top_image.html'>
                        Top Menu Image{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_sub_style_flyout.html'>
                        Sub Menu Flyout
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_sub_style_flyout_dark.html'>
                        Sub Flyout Dark
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_sub_style_flyout_bright.html'>
                        Sub Flyout Bright
                      </a>
                    </li>
                    <li>
                      <a href='layouts_menu_side_compact_click.html'>
                        Menu Inside Click
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='apps_bank.html'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-package'></div>
                    </div>
                    <span>Applications</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='apps_email.html'>Email Application</a>
                    </li>
                    <li>
                      <a href='apps_support_dashboard.html'>
                        Support Dashboard
                      </a>
                    </li>
                    <li>
                      <a href='apps_support_'>Tickets Index</a>
                    </li>
                    <li>
                      <a href='apps_crypto.html'>
                        Crypto Dashboard{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='apps_projects.html'>Projects List</a>
                    </li>
                    <li>
                      <a href='apps_bank.html'>
                        Banking{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='apps_full_chat.html'>Chat Application</a>
                    </li>
                    <li>
                      <a href='apps_todo.html'>
                        To Do Application{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='misc_chat.html'>Popup Chat</a>
                    </li>
                    <li>
                      <a href='apps_pipeline.html'>CRM Pipeline</a>
                    </li>
                    <li>
                      <a href='rentals_index_grid.html'>
                        Property Listing{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='misc_calendar.html'>Calendar</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-file-text'></div>
                    </div>
                    <span>Pages</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='misc_invoice.html'>Invoice</a>
                    </li>
                    <li>
                      <a href='rentals_index_grid.html'>
                        Property Listing{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='misc_charts.html'>Charts</a>
                    </li>
                    <li>
                      <a href='auth_login.html'>Login</a>
                    </li>
                    <li>
                      <a href='auth_register.html'>Register</a>
                    </li>
                    <li>
                      <a href='auth_lock.html'>Lock Screen</a>
                    </li>
                    <li>
                      <a href='misc_pricing_plans.html'>Pricing Plans</a>
                    </li>
                    <li>
                      <a href='misc_error_404.html'>Error 404</a>
                    </li>
                    <li>
                      <a href='misc_error_500.html'>Error 500</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-life-buoy'></div>
                    </div>
                    <span>UI Kit</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='uikit_modals.html'>
                        Modals{' '}
                        <strong className='badge badge-danger'>New</strong>
                      </a>
                    </li>
                    <li>
                      <a href='uikit_alerts.html'>Alerts</a>
                    </li>
                    <li>
                      <a href='uikit_grid.html'>Grid</a>
                    </li>
                    <li>
                      <a href='uikit_progress.html'>Progress</a>
                    </li>
                    <li>
                      <a href='uikit_popovers.html'>Popover</a>
                    </li>
                    <li>
                      <a href='uikit_tooltips.html'>Tooltips</a>
                    </li>
                    <li>
                      <a href='uikit_buttons.html'>Buttons</a>
                    </li>
                    <li>
                      <a href='uikit_dropdowns.html'>Dropdowns</a>
                    </li>
                    <li>
                      <a href='uikit_typography.html'>Typography</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-mail'></div>
                    </div>
                    <span>Emails</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='emails_welcome.html'>Welcome Email</a>
                    </li>
                    <li>
                      <a href='emails_order.html'>Order Confirmation</a>
                    </li>
                    <li>
                      <a href='emails_payment_due.html'>Payment Due</a>
                    </li>
                    <li>
                      <a href='emails_forgot.html'>Forgot Password</a>
                    </li>
                    <li>
                      <a href='emails_activate.html'>Activate Account</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-users'></div>
                    </div>
                    <span>Users</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='users_profile_big.html'>Big Profile</a>
                    </li>
                    <li>
                      <a href='users_profile_small.html'>Compact Profile</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-edit-32'></div>
                    </div>
                    <span>Forms</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='forms_regular.html'>Regular Forms</a>
                    </li>
                    <li>
                      <a href='forms_validation.html'>Form Validation</a>
                    </li>
                    <li>
                      <a href='forms_wizard.html'>Form Wizard</a>
                    </li>
                    <li>
                      <a href='forms_uploads.html'>File Uploads</a>
                    </li>
                    <li>
                      <a href='forms_wisiwig.html'>Wisiwig Editor</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-grid'></div>
                    </div>
                    <span>Tables</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='tables_regular.html'>Regular Tables</a>
                    </li>
                    <li>
                      <a href='tables_datatables.html'>Data Tables</a>
                    </li>
                    <li>
                      <a href='tables_editable.html'>Editable Tables</a>
                    </li>
                  </ul>
                </li>
                <li className='has-sub-menu'>
                  <a href='#'>
                    <div className='icon-w'>
                      <div className='os-icon os-icon-zap'></div>
                    </div>
                    <span>Icons</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='icon_fonts_simple_line_icons.html'>
                        Simple Line Icons
                      </a>
                    </li>
                    <li>
                      <a href='icon_fonts_feather.html'>Feather Icons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_themefy.html'>Themefy Icons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_picons_thin.html'>Picons Thin</a>
                    </li>
                    <li>
                      <a href='icon_fonts_dripicons.html'>Dripicons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_eightyshades.html'>Eightyshades</a>
                    </li>
                    <li>
                      <a href='icon_fonts_entypo.html'>Entypo</a>
                    </li>
                    <li>
                      <a href='icon_fonts_font_awesome.html'>Font Awesome</a>
                    </li>
                    <li>
                      <a href='icon_fonts_foundation_icon_font.html'>
                        Foundation Icon Font
                      </a>
                    </li>
                    <li>
                      <a href='icon_fonts_metrize_icons.html'>Metrize Icons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_picons_social.html'>Picons Social</a>
                    </li>
                    <li>
                      <a href='icon_fonts_batch_icons.html'>Batch Icons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_dashicons.html'>Dashicons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_typicons.html'>Typicons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_weather_icons.html'>Weather Icons</a>
                    </li>
                    <li>
                      <a href='icon_fonts_light_admin.html'>Light Admin</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className='mobile-menu-magic'>
                <h4>Light Admin</h4>
                <p>Clean Bootstrap 4 Template</p>
                <div className='btn-w'>
                  <a
                    className='btn btn-white btn-rounded'
                    href='https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin'
                    target='_blank'
                  >
                    Purchase Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='menu-w color-scheme-light color-style-transparent menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link'>
            <div className='logo-w'>
              <Link to={'/home'}>
                <a className='logo' href='assets/img/logo.png'>
                  <img src='assets/img/logo.png' />
                  <div className='logo-label'>LeKiné</div>
                </a>
              </Link>
            </div>
            <div className='logged-user-w avatar-inline'>
              <div className='logged-user-i'>
                <div className='avatar-w'>
                  <img alt='' src='img/avatar1.jpg' />
                </div>
                <div className='logged-user-info-w'>
                  <div className='logged-user-name'>
                    <strong>{currentUser.login}</strong>
                  </div>
                  <div className='logged-user-role'>Admin</div>
                </div>
                <div className='logged-user-toggler-arrow'>
                  <div className='os-icon os-icon-chevron-down'></div>
                </div>
                <div className='logged-user-menu color-style-bright'>
                  <div className='logged-user-avatar-info'>
                    <div className='avatar-w'>
                      <img alt='' src='img/avatar1.jpg' />
                    </div>
                    <div className='logged-user-info-w'>
                      <div className='logged-user-name'>
                        {currentUser.login}
                      </div>
                      <div className='logged-user-role'>Kinésithérapeute</div>
                    </div>
                  </div>
                  <div className='bg-icon'>
                    <i className='os-icon os-icon-wallet-loaded'></i>
                  </div>
                  <ul>
                    <li>
                      <a href='apps_email.html'>
                        <i className='os-icon os-icon-mail-01'></i>
                        <span>Incoming Mail</span>
                      </a>
                    </li>
                    <li>
                      <a href='users_profile_big.html'>
                        <Link to={'/profile'}>
                          <i className='os-icon os-icon-user-male-circle2'></i>
                          <span>Profile Details</span>
                        </Link>
                      </a>{' '}
                    </li>
                    <li>
                      <a href=''>
                        <i className='os-icon os-icon-coins-4'></i>
                        <span>Billing Details</span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='os-icon os-icon-others-43'></i>
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li>
                      {' '}
                      <Link to={'/'} onClick={logOut}>
                        <i className='os-icon os-icon-signs-11'></i>

                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='menu-actions'>
              <div className='messages-notifications os-dropdown-trigger os-dropdown-position-right'>
                <i className='os-icon os-icon-mail-14'></i>
                <div className='new-messages-count'>12</div>
                <div className='os-dropdown light message-list'>
                  <ul>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar1.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>John Mayers</h6>
                          <h6 className='message-title'>Account Update</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar2.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>Phil Jones</h6>
                          <h6 className='message-title'>Secutiry Updates</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar3.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>Bekky Simpson</h6>
                          <h6 className='message-title'>Vacation Rentals</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar4.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>Alice Priskon</h6>
                          <h6 className='message-title'>
                            Payment Confirmation
                          </h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='top-icon top-settings os-dropdown-trigger os-dropdown-position-right'>
                <i className='os-icon os-icon-ui-46'></i>
                <div className='os-dropdown'>
                  <div className='icon-w'>
                    <i className='os-icon os-icon-ui-46'></i>
                  </div>
                  <ul>
                    <li>
                      <a href='users_profile_small.html'>
                        <i className='os-icon os-icon-ui-49'></i>
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href='users_profile_small.html'>
                        <i className='os-icon os-icon-grid-10'></i>
                        <span>Billing Info</span>
                      </a>
                    </li>
                    <li>
                      <a href='users_profile_small.html'>
                        <i className='os-icon os-icon-ui-44'></i>
                        <span>My Invoices</span>
                      </a>
                    </li>
                    <li>
                      <a href='users_profile_small.html'>
                        <i className='os-icon os-icon-ui-15'></i>
                        <span>Cancel Account</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='messages-notifications os-dropdown-trigger os-dropdown-position-right'>
                <i className='os-icon os-icon-zap'></i>
                <div className='new-messages-count'>4</div>
                <div className='os-dropdown light message-list'>
                  <div className='icon-w'>
                    <i className='os-icon os-icon-zap'></i>
                  </div>
                  <ul>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar1.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>John Mayers</h6>
                          <h6 className='message-title'>Account Update</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar2.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>Phil Jones</h6>
                          <h6 className='message-title'>Secutiry Updates</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar3.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>Bekky Simpson</h6>
                          <h6 className='message-title'>Vacation Rentals</h6>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <div className='user-avatar-w'>
                          <img alt='' src='img/avatar4.jpg' />
                        </div>
                        <div className='message-content'>
                          <h6 className='message-from'>Alice Priskon</h6>
                          <h6 className='message-title'>
                            Payment Confirmation
                          </h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='element-search autosuggest-search-activator'>
              <input placeholder='Start typing to search...' type='text' />
            </div>
            <h1 className='menu-page-header'>Page Header</h1>
            <ul className='main-menu'>
              <li className='sub-header'>
                <span>Layouts</span>
              </li>
              {/* <li className='selected has-sub-menu'>
                {' '}
                <a>
                  {' '}
                  <Link to={'/factures'}>
                    <div className='icon-w'></div>
                    <span>Factures</span>{' '}
                  </Link>
                </a>
              </li> */}
              <li className='selected has-sub-menu'>
                <a>
                  <div className='icon-w'>
                    <div className='os-icon os-icon-layout'></div>
                  </div>
                  <span>Tables</span>
                </a>
                <div className='sub-menu-w'>
                  <div className='sub-menu-header'>Tables</div>
                  <div className='sub-menu-icon'>
                    <i className='os-icon os-icon-layout'></i>
                  </div>
                  <div className='sub-menu-i'>
                    <ul className='sub-menu'>
                      {showAnalysteBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/employes'}>
                              <h6 style={{ color: 'white' }}>Employes</h6>
                            </Link>
                          </a>
                        </li>
                      )}
                      {/* {showAnalysteBoard && (
                      <li>
                        <a href=''>
                          {' '}
                          <Link to={'/factures'}>
                            <h6 style={{ color: 'white' }}>Factures</h6>
                          </Link>
                        </a>
                      </li>)} */}
                      {showAnalysteBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/bords'}>
                              {' '}
                              <h6 style={{ color: 'white' }}>Bordoureaus</h6>
                            </Link>
                          </a>
                        </li>
                      )}
                      {showAdminBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/exercices'}>
                              {' '}
                              <h6 style={{ color: 'white' }}>Exercices</h6>
                            </Link>
                          </a>
                        </li>
                      )}
                      {showAnalysteBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/rends'}>
                              {' '}
                              <h6 style={{ color: 'white' }}>Rendez-vous</h6>
                            </Link>
                          </a>
                        </li>
                      )}
                      {showAnalysteBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/prises'}>
                              {' '}
                              <h6 style={{ color: 'white' }}>
                                Prises en Charge
                              </h6>
                            </Link>
                          </a>
                        </li>
                      )}
                      {showAdminBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/users'}>
                              {' '}
                              <h6 style={{ color: 'white' }}>Utilisateurs</h6>
                            </Link>
                          </a>
                        </li>
                      )}
                      {/* {showAnalysteBoard && (
                        <li>
                          <a href=''>
                            {' '}
                            <Link to={'/seances'}>
                              {' '}
                              <h6 style={{ color: 'white' }}>Seances</h6>
                            </Link>
                          </a>
                        </li>
                      )} */}
                    </ul>
                  </div>
                </div>
              </li>

              {/* <li className='sub-header'>
                <span>Options</span>
              </li> */}

              {/* <li className=' has-sub-menu'>
                <a href='#'>
                  <div className='icon-w'>
                    <div className='os-icon os-icon-users'></div>
                  </div>
                  <span>Users</span>
                </a>
                <div className='sub-menu-w'>
                  <div className='sub-menu-header'>Users</div>
                  <div className='sub-menu-icon'>
                    <i className='os-icon os-icon-users'></i>
                  </div>
                  <div className='sub-menu-i'>
                    <ul className='sub-menu'>
                      <li>
                        <a href='users_profile_big.html'>Big Profile</a>
                      </li>
                      <li>
                        <a href='users_profile_small.html'>Compact Profile</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className=' has-sub-menu'>
                <a href='#'>
                  <div className='icon-w'>
                    <div className='os-icon os-icon-edit-32'></div>
                  </div>
                  <span>Forms</span>
                </a>
                <div className='sub-menu-w'>
                  <div className='sub-menu-header'>Forms</div>
                  <div className='sub-menu-icon'>
                    <i className='os-icon os-icon-edit-32'></i>
                  </div>
                  <div className='sub-menu-i'>
                    <ul className='sub-menu'>
                      <li>
                        <a href='forms_regular.html'>Regular Forms</a>
                      </li>
                      <li>
                        <a href='forms_validation.html'>Form Validation</a>
                      </li>
                      <li>
                        <a href='forms_wizard.html'>Form Wizard</a>
                      </li>
                      <li>
                        <a href='forms_uploads.html'>File Uploads</a>
                      </li>
                      <li>
                        <a href='forms_wisiwig.html'>Wisiwig Editor</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className=' has-sub-menu'>
                <a href='#'>
                  <div className='icon-w'>
                    <div className='os-icon os-icon-grid'></div>
                  </div>
                  <span>Tables</span>
                </a>
                <div className='sub-menu-w'>
                  <div className='sub-menu-header'>Tables</div>
                  <div className='sub-menu-icon'>
                    <i className='os-icon os-icon-grid'></i>
                  </div>
                  <div className='sub-menu-i'>
                    <ul className='sub-menu'>
                      <li>
                        <a href='tables_regular.html'>Regular Tables</a>
                      </li>
                      <li>
                        <a href='tables_datatables.html'>Data Tables</a>
                      </li>
                      <li>
                        <a href='tables_editable.html'>Editable Tables</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className=' has-sub-menu'>
                <a href='#'>
                  <div className='icon-w'>
                    <div className='os-icon os-icon-zap'></div>
                  </div>
                  <span>Icons</span>
                </a>
                <div className='sub-menu-w'>
                  <div className='sub-menu-header'>Icons</div>
                  <div className='sub-menu-icon'>
                    <i className='os-icon os-icon-zap'></i>
                  </div>
                  <div className='sub-menu-i'>
                    <ul className='sub-menu'>
                      <li>
                        <a href='icon_fonts_simple_line_icons.html'>
                          Simple Line Icons
                        </a>
                      </li>
                      <li>
                        <a href='icon_fonts_feather.html'>Feather Icons</a>
                      </li>
                      <li>
                        <a href='icon_fonts_themefy.html'>Themefy Icons</a>
                      </li>
                      <li>
                        <a href='icon_fonts_picons_thin.html'>Picons Thin</a>
                      </li>
                      <li>
                        <a href='icon_fonts_dripicons.html'>Dripicons</a>
                      </li>
                      <li>
                        <a href='icon_fonts_eightyshades.html'>Eightyshades</a>
                      </li>
                    </ul>
                    <ul className='sub-menu'>
                      <li>
                        <a href='icon_fonts_entypo.html'>Entypo</a>
                      </li>
                      <li>
                        <a href='icon_fonts_font_awesome.html'>Font Awesome</a>
                      </li>
                      <li>
                        <a href='icon_fonts_foundation_icon_font.html'>
                          Foundation Icon Font
                        </a>
                      </li>
                      <li>
                        <a href='icon_fonts_metrize_icons.html'>
                          Metrize Icons
                        </a>
                      </li>
                      <li>
                        <a href='icon_fonts_picons_social.html'>
                          Picons Social
                        </a>
                      </li>
                      <li>
                        <a href='icon_fonts_batch_icons.html'>Batch Icons</a>
                      </li>
                    </ul>
                    <ul className='sub-menu'>
                      <li>
                        <a href='icon_fonts_dashicons.html'>Dashicons</a>
                      </li>
                      <li>
                        <a href='icon_fonts_typicons.html'>Typicons</a>
                      </li>
                      <li>
                        <a href='icon_fonts_weather_icons.html'>
                          Weather Icons
                        </a>
                      </li>
                      <li>
                        <a href='icon_fonts_light_admin.html'>Light Admin</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>

          <div className='content-w'>
            <div className='top-bar color-scheme-transparent'>
              <div className='top-menu-controls'>
                <div className='element-search autosuggest-search-activator'>
                  <input placeholder='Start typing to search...' type='text' />
                </div>

                <div className='messages-notifications os-dropdown-trigger os-dropdown-position-left'>
                  <i className='os-icon os-icon-mail-14'></i>
                  <div className='new-messages-count'>12</div>
                  <div className='os-dropdown light message-list'>
                    <ul>
                      <li>
                        <a href='#'>
                          <div className='user-avatar-w'>
                            <img alt='' src='img/avatar1.jpg' />
                          </div>
                          <div className='message-content'>
                            <h6 className='message-from'>John Mayers</h6>
                            <h6 className='message-title'>Account Update</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div className='user-avatar-w'>
                            <img alt='' src='img/avatar2.jpg' />
                          </div>
                          <div className='message-content'>
                            <h6 className='message-from'>Phil Jones</h6>
                            <h6 className='message-title'>Secutiry Updates</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div className='user-avatar-w'>
                            <img alt='' src='img/avatar3.jpg' />
                          </div>
                          <div className='message-content'>
                            <h6 className='message-from'>Bekky Simpson</h6>
                            <h6 className='message-title'>Vacation Rentals</h6>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <div className='user-avatar-w'>
                            <img alt='' src='img/avatar4.jpg' />
                          </div>
                          <div className='message-content'>
                            <h6 className='message-from'>Alice Priskon</h6>
                            <h6 className='message-title'>
                              Payment Confirmation
                            </h6>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='top-icon top-settings os-dropdown-trigger os-dropdown-position-left'>
                  <i className='os-icon os-icon-ui-46'></i>
                  <div className='os-dropdown'>
                    <div className='icon-w'>
                      <i className='os-icon os-icon-ui-46'></i>
                    </div>
                    <ul>
                      <li>
                        <a href='users_profile_small.html'>
                          <i className='os-icon os-icon-ui-49'></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href='users_profile_small.html'>
                          <i className='os-icon os-icon-grid-10'></i>
                          <span>Billing Info</span>
                        </a>
                      </li>
                      <li>
                        <a href='users_profile_small.html'>
                          <i className='os-icon os-icon-ui-44'></i>
                          <span>My Invoices</span>
                        </a>
                      </li>
                      <li>
                        <a href='users_profile_small.html'>
                          <i className='os-icon os-icon-ui-15'></i>
                          <span>Cancel Account</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='logged-user-w'>
                  <div className='logged-user-i'>
                    <div className='avatar-w'>
                      <img alt='' src='img/avatar1.jpg' />
                    </div>
                    <div className='logged-user-menu color-style-bright'>
                      <div className='logged-user-avatar-info'>
                        <div className='avatar-w'>
                          <img alt='' src='img/avatar1.jpg' />
                        </div>
                        <div className='logged-user-info-w'>
                          <div className='logged-user-name'>
                            {currentUser.login}
                          </div>
                          <div className='logged-user-role'>Kiné</div>
                        </div>
                      </div>
                      <div className='bg-icon'>
                        <i className='os-icon os-icon-wallet-loaded'></i>
                      </div>
                      <ul>
                        <li>
                          <a href='apps_email.html'>
                            <i className='os-icon os-icon-mail-01'></i>
                            <span>Incoming Mail</span>
                          </a>
                        </li>
                        <li>
                          <a href='users_profile_big.html'>
                            <i className='os-icon os-icon-user-male-circle2'></i>
                            <span>Profile Details</span>
                          </a>
                        </li>
                        <li>
                          <a href='users_profile_small.html'>
                            <i className='os-icon os-icon-coins-4'></i>
                            <span>Billing Details</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='os-icon os-icon-others-43'></i>
                            <span>Notifications</span>
                          </a>
                        </li>
                        <li>
                          <a href='#'>
                            <i className='os-icon os-icon-signs-11'></i>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                      <h4>Light Admin</h4>
                      <p>Clean Bootstrap 4 Template</p>
                      <div class='btn-w'>
                        <a
                          class='btn btn-white btn-rounded'
                          href='https://themeforest.net/item/light-admin-clean-bootstrap-dashboard-html-template/19760124?ref=Osetin'
                          target='_blank'
                        >
                          Purchase Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Routes>
              <Route exact path='/' element={<Home />} />

              <Route
                exact
                path='/traitements/:idsea'
                element={<ShowTraitements />}
              />
              <Route
                exact
                path='/addTraitement/:idsea'
                element={<AddTraitement />}
              />
              <Route
                exact
                path='/editTraitement/:id'
                element={<EditTraitement />}
              />
              <Route exact path='/rends' element={<ShowRends />} />
              <Route exact path='/addRend' element={<AddRend />} />
              <Route exact path='/editRend/:id' element={<EditRend />} />
              <Route exact path='/prises' element={<ShowPrises />} />
              <Route exact path='/addPrise/:id/:idp/:idk' element={<AddPrise />} />

              <Route exact path='/editPrise/:id' element={<EditPrise />} />
              <Route
                exact
                path='/SeancesPrise/:id/:idp'
                element={<ShowPriseSeances />}
              />
              <Route
                exact
                path='/FacturesNonAffect/:x'
                element={<ShowFactureAffect />}
              />
              <Route
                exact
                path='/FacturesBord/:id'
                element={<ShowFactureBords />}
              />
              <Route exact path='/users' element={<ShowUsers />} />
              <Route exact path='/bords' element={<ShowBords />} />
              <Route exact path='/addBord' element={<AddBord />} />
              <Route exact path='/editBord/:id' element={<EditBord />} />
              <Route exact path='/factures' element={<ShowFactures />} />
              <Route exact path='/addFacture' element={<AddFacture />} />
              <Route exact path='/editFacture/:id' element={<EditFacture />} />
              <Route exact path='/exercices' element={<ShowExercices />} />
              <Route exact path='/addExercice' element={<AddExercice />} />
              <Route
                exact
                path='/editExercice/:id'
                element={<EditExercice />}
              />
              <Route exact path='/employes' element={<ShowEmployes />} />
              <Route exact path='/addEmploye' element={<AddEmploye />} />
              <Route exact path='/editEmploye/:id' element={<EditEmploye />} />
              <Route exact path='/seances' element={<ShowSeances />} />
              <Route exact path='/addSeance' element={<AddSeance />} />
              <Route exact path='/editSeance/:id' element={<EditSeance />} />

              <Route exact path='/home' element={<Home />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/patient/:id' element={<Patient />} />
              <Route exact path='/login' element={<Login />} />
              <Route path='/user' element={<BoardUser />} />
              <Route path='/analyste' element={<BoardAnalyste />} />
              <Route path='/admin' element={<BoardAdmin />} />
              <Route path='/prestataire' element={<BoardPrestataire />} />
            </Routes>
          </div>
        </div>{' '}
        <div id='content' className='app-content'></div>
      </div>
    </>
  )
}
export default App
