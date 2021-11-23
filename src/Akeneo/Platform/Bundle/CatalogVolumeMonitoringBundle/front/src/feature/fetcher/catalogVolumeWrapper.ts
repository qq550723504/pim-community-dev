import {Axis} from '../model/catalog-volume';

const volumesKeyFigures: {[volumeName: string]: string[]} = {
  product: ['count_products', 'count_product_and_product_model_values', 'average_max_product_and_product_model_values'],
  catalog: ['count_channels', 'count_locales'],
  product_structure: [],
  variant_modeling: [],
  reference_entities: [],
  assets: [],
};

const transformVolumesToAxis = (rawCatalogVolumes: any): Axis[] => {
  let axesCatalogVolumes: Axis[] = [];
  for (const [axisName, catalogVolumes] of Object.entries(volumesKeyFigures)) {
    axesCatalogVolumes.push({
      name: axisName,
      catalogVolumes: catalogVolumes.map(volumeName => {
        return {
          name: volumeName,
          type: rawCatalogVolumes[volumeName].type,
          value: rawCatalogVolumes[volumeName].value,
        };
      }),
    });
  }

  return axesCatalogVolumes;
};

export {transformVolumesToAxis};
