import { Provider } from 'react-redux'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AppLoading from '../components/ui/loading/app-loading'
import { MainErrorFallback } from '../components/error/app-error'
import { store } from '../store/store'
type AppProviderProps = {
  children: React.ReactNode
}
export const AppProvider = ({ children }: AppProviderProps) => {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <Suspense fallback={<AppLoading />}>
        <ErrorBoundary FallbackComponent={MainErrorFallback}>
          <QueryClientProvider client={queryClient}>
            {children}
            {import.meta.env.DEV && <ReactQueryDevtools />}
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme='colored'
      />
    </Provider>
  )
}
