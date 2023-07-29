import { DataGridScope, DeleteEntityButton, GenericCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Items
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/item/create">
					Create new item
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Item" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="admin/item/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="name" header="Name" />
				<NumberCell field="boxNumber" header="Box number" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
