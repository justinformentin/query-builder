import React from 'react'
import { storiesOf } from '@storybook/react'
import QueryBuilder from './'

storiesOf('QueryBuilder', module).add('Defaults', () => {
  return (
    <div>
      <QueryBuilder />
    </div>
  )
})
