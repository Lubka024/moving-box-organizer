import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ItemForm } from '../../../components/forms/ItemForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create item
			</SlotSources.Title>
			<CreateScope entity="Item" redirectOnSuccess="admin/item/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create item" labelSaved="Create item" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/item/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Items
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<ItemForm />
				</>
			</CreateScope>
		</>
	)
}
