import React, { useContext } from 'react'
import { ShopiCartContext } from '../../Context'
import { ShopiCartContextType } from '../../types'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }: {children: React.ReactNode}) => {
  const context = useContext(ShopiCartContext) as ShopiCartContextType

  if (!context.logged) return <Navigate to={'/SignIn'} replace></Navigate>

  return children
}
