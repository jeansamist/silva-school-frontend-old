import React from 'react'
import Flexbox from '../components/Flexbox'
import Card from '../components/ui/Cards'
import Form from '../components/Form'
import { useForm } from 'react-hook-form'
import { FieldControlled } from '../components/ui/Fields'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import Checkbox from '../components/ui/Checkbox'
import { Link } from 'react-router-dom'
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required()
export default function Login() {
  const { control, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  return (
    <Flexbox classNames={["view", "auth", 'jcc', 'aic']}>
      <div style={{ maxWidth: 360, width: '95%' }}>
        <Card titleMargin={'1em'} title='Login'>
          <Form formState={formState}>
            <FieldControlled Ico={FaEnvelope} control={control} name='email' label='E-mail' />
            <FieldControlled Ico={FaLock} control={control} name='password' type='password' label='Password' />
            <Link className='unformated-link' style={{ fontSize: '0.8em', marginBottom: '1.5em', marginLeft: '0.5em' }} to={'forgotpassword'}>I forgot my password</Link>
            <Flexbox><Checkbox /> <div style={{ color: 'var(--color-info-2)' }}>Remenber me the next time</div></Flexbox>
          </Form>
        </Card>
      </div>
    </Flexbox>
  )
}
