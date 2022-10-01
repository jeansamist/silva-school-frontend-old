import React, { useState } from 'react';
import Card from '../components/ui/Cards';
import Table from '../components/ui/Tables';
import Flexbox from '../components/Flexbox';
import { Button } from '../components/ui/Buttons';
import Modal from '../components/Modal';
import Form from '../components/Form'
import { useForm } from 'react-hook-form'
import { FieldControlled } from '../components/ui/Fields'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  name: yup.string().max(25).required(),
  level: yup.number('Please enter a number').min(1).required(),
  price: yup.number('Please enter a number').min(1).required()
}).required()

export default function Classes() {
  const [createNewClassModalStatus, setcreateNewClassModalStatus] = useState(false)
  const { control, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  return (
    <div className="view classes">
      <Flexbox classNames={['mb-2', 'jcsb']}>
        <Button onClick={() => setcreateNewClassModalStatus(true)}>Create a new class</Button>
        <Button>Export a CSV file</Button>
        <Button>Export a PDF report</Button>
      </Flexbox>
      <Card title='Classes free'>
        <Table thead={['Name', 'Level', 'Number of classes', 'Total students', 'Total Professors', 'Price']} tdata={[{ data: ['Uppersix', '3', 4, 4 * 30, 4 * 5, 50000] }]} />
      </Card>
      <div className="modals">
        <Modal isOpen={createNewClassModalStatus} callback={setcreateNewClassModalStatus} title='Create a new class'>
          <Form formState={formState} buttonLabel='Create class'>
            <FieldControlled control={control} name='name' label='Class name' />
            <Flexbox classNames={['flex-gap']}>
              <FieldControlled control={control} name='level' type='number' label='Class level' />
              <FieldControlled control={control} name='price' type='number' label='Class price' />
            </Flexbox>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
