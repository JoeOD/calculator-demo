import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
  createHashRouter
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container } from 'react-bootstrap'
import Home from './features/counter/home'
import About from './features/counter/about'
import Contact from './features/counter/contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store';
import {
  transitionDirectionVar
} from './features/counter/counterSlice';

const routes = [
  { path: '/', name: 'Home', element: <Provider store={store}><Home /></Provider>, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
  {
    path: '/contact',
    name: 'Contact',
    element: <Provider store={store}><Contact/></Provider>,
    nodeRef: createRef(),
  }
]

const router = createHashRouter([
  {
    path: '/',
    element: <Provider store={store}><Example /></Provider>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function Example() {
  const transitionDirectionVarCopy = useSelector(transitionDirectionVar);
  function anotherCssDeterminer() {
    return transitionDirectionVarCopy
  }
  
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
      <Container className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames= {anotherCssDeterminer()}
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className={"myCard"}>
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
