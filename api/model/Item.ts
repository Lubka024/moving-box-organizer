import { SchemaDefinition as def } from '@contember/schema-definition'


export class Item {
	name = def.stringColumn()
	description = def.stringColumn()
	boxNumber = def.intColumn()
}
