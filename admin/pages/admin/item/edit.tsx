import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { ItemForm } from '../../../components/forms/ItemForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit item
			</SlotSources.Title>
			<EditScope entity="Item(id=$id)" redirectOnSuccess="admin/item/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/item/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<ItemForm />
			</EditScope>
		</>
	)
}
