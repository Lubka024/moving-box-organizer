import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { BoxIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<BoxIcon />
				<>
					Items
				</>
			</Stack>}
			to="admin/item/list"
		/>
	</HasRole>
</Menu>)
