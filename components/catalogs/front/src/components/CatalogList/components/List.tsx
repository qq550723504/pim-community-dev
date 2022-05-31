import React, {FC, PropsWithChildren} from 'react';
import {Badge, Table} from 'akeneo-design-system';
import {useCatalogs} from '../hooks/useCatalogs';
import {useTranslate} from '@akeneo-pim-community/shared';
import {Empty} from './Empty';

type Props = {
    owner: string;
};

const List: FC<PropsWithChildren<Props>> = ({owner}) => {
    const translate = useTranslate();

    const catalogs = useCatalogs(owner);

    if (catalogs.isLoading) {
        return null;
    }

    if (catalogs.isError) {
        throw new Error(catalogs.error || undefined);
    }

    return (
        <>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>{translate('akeneo_catalogs.catalog_list.catalogs_name')}</Table.HeaderCell>
                    <Table.HeaderCell>{translate('akeneo_catalogs.catalog_list.status')}</Table.HeaderCell>
                </Table.Header>
                <Table.Body>
                    {catalogs.data?.map(catalog => (
                        <Table.Row key={catalog.id}>
                            <Table.Cell>{catalog.name}</Table.Cell>
                            <Table.Cell>
                                {catalog.enabled ? (
                                    <Badge level='primary'>{translate('akeneo_catalogs.catalog_list.enabled')}</Badge>
                                ) : (
                                    <Badge level='tertiary'>{translate('akeneo_catalogs.catalog_list.disabled')}</Badge>
                                )}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            {0 === catalogs.data?.length && <Empty />}
        </>
    );
};

export {List};
