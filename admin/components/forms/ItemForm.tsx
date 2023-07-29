import { Component, NumberField, TextField } from '@contember/admin'

export const ItemForm = Component(() => <>
	<TextField field="name" label="Name" />
	<TextField field="description" label="Description" />
	<NumberField field="boxNumber" label="Box number" />
</>)
