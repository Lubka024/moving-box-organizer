import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Item detail
			</SlotSources.Title>
			<DetailScope entity="Item(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/item/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Items
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/item/edit(id: $entity.id)">
						Edit item
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="boxNumber" label="Box number" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
