import React from 'react'
import { useTranslation } from "react-i18next";


const ErrorIndicator = () => {
  const { t } = useTranslation();
  return (
    <div>{t('sorry')}</div>
  )
}

export default ErrorIndicator