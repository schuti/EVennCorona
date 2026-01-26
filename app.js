const DATASETS = [
  {
    id: 'All EV-pC (291)',
    label: 'All EV-pC (291)',
    genes: [
      'A1BG','A2M','ACTA2','ACTBL2','ACTC1','ACTG1','ACTG2','ACTN4','ACTR2','ACTR3','AFM','AFP','AGT','ALB','ALCAM','ALOX12B','AMBP','ANG','APCS','APOA1','APOA2','APOA4','APOB','APOC1','APOC2','APOC3','APOC4','APOD','APOE','APOH','APOL1','APOM','ARF1','ARG1','ARL8B','ARPC5','ART4','ASAH1','ASB8','ATP6V1E1','AZGP1','C1QA','C1QB','C1S','C2','C3','C4','C4A','C4B','C4BPA','C4BPB','C5','C6','C7','C9','CA3','CABP5','CALM1','CALML5','CAMP','CAPZA2','CASP14','CCT4','CD55','CD58','CD5L','CDH1','CDSN','CETP','CFB','CFH','CFHR1','CFHR2','CFI','CFP','CLTCL1','CLU','CNP','CP','CPOX','CROCC','CST6','CSTA','CTNNB1','CTSD','CYBRD1','DCD','DEFA1','DSC1','DSC3','DSCAML1','DSG1','DSP','DYNC2H1','EEF1A1','ENO3','F12','F2','F5','F9','FABP5','FASN','FETUB','FGA','FGB','FGG','FLG','FN1','G6PD','GC','GGCT','GGT3P','GMFB','GNAI3','GNAS','GP5','GPATCH8','GPX3','GSDMA','GUCA1A','GVINP1','HABP2','HBA','HBA1','HBB','HLA-A','HLA-B','HLA-DRB1','HP','HPR','HPX','HRG','HRNR','HSPA1A','IGHA1','IGHA2','IGHG1','IGHG2','IGHG3','IGHG4','IGHM','IGHV1-18','IGHV1-2','IGHV1-8','IGHV3-23','IGHV3-30','IGHV3-48','IGHV3-66','IGHV3-7','IGHV3-74','IGHV4-34','IGHV4-59','IGHV5-51','IGK','IGKC','IGKV2D-28','IGKV3-11','IGKV3-15','IGKV3-20','IGKV3D-20','IGKV4-1','IGLC1','IGLC2','IGLC3','IGLC7','IGLL5','IGLV1-47','IGLV3-9','IGM','IQGAP1','ITGA2B','ITGA6','ITGB3','ITIH1','ITIH2','ITIH4','JCHAIN','JUP','KLKB1','KNG1','KPRP','KRT13','KRT19','KRT20','KRT3','KRT4','KRT6B','KRT75','KRT76','KRT77','KRT78','KRT8','KRT80','LASP1','LBP','LDHA','LOR','LPA','LRP6','LYSMD1','MBL2','MDH1','MSN','MUCL1','MYH9','NCCRP1','NFIL3','NME2P1','NRGN','ORC4','ORM1','ORM2','PCLAF','PDCD4','PDLIM1','PF4','PGD','PGLYRP1','PGLYRP2','PIGR','PIP','PIP4K2A','PKP1','PLG','PON1','PRDX2','PRG4','PROS1','PRSS1','PSMA3','PSMA6','PSMB9','PZP','RAB11A','RAB1C','RAB6A','RAB8A','RAC3','RAP2C','RBP4','RHD','RPL22','RPS27A','RPSA','RTCA','S100A11','S100A14','S100A7','S100A8','S100A9','SAA1','SAA2','SAA4','SBSN','SCGB1D2','SEMG1','SEMG2','SERPINA1','SERPINA3','SERPINA7','SERPINB12','SERPINB3','SERPINB4','SERPINC1','SERPIND1','SERPINF1','SERPINF2','SERPING1','SH3BGRL','SLC29A1','SLPI','SPRR2E','STIP1','SYTL4','TF','TGM1','TGM3','THBS1','TKT','TPM2','TSPAN9','TTR','TUBB1','TUBB4A','TXN','UBC','URAD','VTN','VWF','WBP2','XP32'
    ]
  },
  {
    id: 'THP1 EV-pC (healthy) (186)',
    label: 'THP1 EV-pC (healthy) (186)',
    genes: [
      'TF','HP','IGHG1','LPA','FGA','FGB','IGHG2','IGKC','APOB','VTN','IGHG4','IGHA1','IGHG3','IGLC3','C4A','HLA-B','C3','A1BG','KNG1','IGHM','IGLL5','A2M','HRNR','FGG','CP','CLU','HPX','KPRP','APOD','IGHA2','APOH','HLA-DRB1','DSG1','SERPINA1','F2','IGKV3-20','TTR','KRT77','ORM1','CFH','NME2P1','HRG','RAB11A','DCD','ALCAM','DSP','SLPI','LASP1','GMFB','RPL22','APOA4','CALM1','IGKV2D-28','ACTC1','IGLC2','C4B','KRT76','EEF1A1','SERPINC1','PSMA3','ITIH2','ACTG1','KRT6B','HLA-A','PON1','APOC3','APOA1','SERPINA3','APOE','ITIH4','PRG4','TPM2','HPR','CFB','IGKV3D-20','IGHV3-23','CFHR1','AZGP1','IGHV3-74','LBP','SERPIND1','AGT','RBP4','IGLV3-9','IGHV3-7','KRT8','ITIH1','SERPINF1','SERPINF2','IGKV3-11','AMBP','IGHV1-18','CFI','IGKV3-15','PRSS1','F12','HBA1','RAB1C','PLG','ACTG2','ACTA2','KRT75','IGHV3-66','APOL1','ORM2','C9','C4BPA','SERPING1','AFM','KLKB1','IGHV3-30','FN1','IGHV3-48','SERPINA7','IGHV1-8','SAA1','APOM','HABP2','APOA2','JCHAIN','HBB','PGLYRP2','IGHV4-59','C7','KRT13','JUP','RPS27A','SBSN','CASP14','PIP','SERPINB4','S100A8','S100A7','KRT78','APOC1','APOC2','FLG','S100A9','DEFA1','SERPINB12','CSTA','MUCL1','SCGB1D2','DSC1','CALML5','PKP1','KRT3','GGT3P','APOC4','KRT80','UBC','RAC3','SYTL4','GPATCH8','TGM3','SEMG1','CDSN','XP32','SAA4','ARG1','SERPINB3','SEMG2','KRT20','S100A14','GGCT','TGM1','ALOX12B','CTSD','LOR','GSDMA','PRDX2','ASAH1','DSC3','NCCRP1','ARPC5','S100A11','CST6','ORC4','SPRR2E','DYNC2H1','GVINP1','IGLC7','IGLC1','F5','ACTBL2','TUBB4A'
    ]
  },
  {
    id: 'THP1 EV-pC (RA) (126)',
    label: 'THP1 EV-pC (RA) (126)',
    genes: [
      'TF','FGB','HP','ACTG1','FGA','C3','A2M','KNG1','KRT6B','IGHA1','ACTG2','IGHG2','CFH','CP','C4B','HPR','IGHG3','IGKC','CLU','VTN','IGLC3','APOH','FGG','HPX','A1BG','SERPINC1','PON1','TTR','ITIH2','APOA4','SERPINA1','CFB','F2','KPRP','SERPINA3','IGKV3-20','APOD','AMBP','HRG','ORM1','LPA','APOE','DSG1','APOA1','APOC3','APCS','AZGP1','HRNR','RBP4','ITIH4','IGKV2D-28','ITIH1','IGKV3-15','APOB','IGHG1','C4A','IGHG4','IGHM','KRT75','PLG','PZP','AGT','F5','CFHR1','ORM2','IGHV3-30','AFM','SERPIND1','LBP','SERPINF2','SERPINA7','HBB','JCHAIN','ARF1','FN1','APOL1','C4BPA','SERPING1','C5','IGHV1-18','HBA1','DSCAML1','SH3BGRL','ACTC1','EEF1A1','C9','SERPINF1','SAA1','SAA2','HLA-B','IGHV3-23','PGLYRP2','CDH1','SLPI','RAC3','APOM','APOC2','IGLC1','KRT8','APOA2','IGKV3D-20','DEFA1','IGHA2','PRG4','DCD','KLKB1','TUBB1','CFI','CFHR2','CAMP','IGKV3-11','IGLV3-9','HLA-A','IGHV4-59','ACTA2','ITGA2B','IGLC2','KRT13','KRT4','ITGB3','KRT19','ANG','CETP','IGHV1-2','IGHV3-66','IGHV3-74'
    ]
  },
  {
    id: 'THP1 EV-pC (combined) (204)',
    label: 'THP1 EV-pC (combined) (204)',
    genes: [
      'TF','HP','IGHG1','LPA','FGA','FGB','IGHG2','IGKC','APOB','VTN','IGHG4','IGHA1','IGHG3','IGLC3','C4A','HLA-B','C3','A1BG','KNG1','IGHM','IGLL5','A2M','HRNR','FGG','CP','CLU','HPX','KPRP','APOD','IGHA2','APOH','HLA-DRB1','DSG1','SERPINA1','F2','IGKV3-20','TTR','KRT77','ORM1','CFH','NME2P1','HRG','RAB11A','DCD','ALCAM','DSP','SLPI','LASP1','GMFB','RPL22','APOA4','CALM1','IGKV2D-28','ACTC1','IGLC2','C4B','KRT76','EEF1A1','SERPINC1','PSMA3','ITIH2','ACTG1','KRT6B','HLA-A','PON1','APOC3','APOA1','SERPINA3','APOE','ITIH4','PRG4','TPM2','HPR','CFB','IGKV3D-20','IGHV3-23','CFHR1','AZGP1','IGHV3-74','LBP','SERPIND1','AGT','RBP4','IGLV3-9','IGHV3-7','KRT8','ITIH1','SERPINF1','SERPINF2','IGKV3-11','AMBP','IGHV1-18','CFI','IGKV3-15','PRSS1','F12','HBA1','RAB1C','PLG','ACTG2','ACTA2','KRT75','IGHV3-66','APOL1','ORM2','C9','C4BPA','SERPING1','AFM','KLKB1','IGHV3-30','FN1','IGHV3-48','SERPINA7','IGHV1-8','SAA1','APOM','HABP2','APOA2','JCHAIN','HBB','PGLYRP2','IGHV4-59','C7','KRT13','JUP','RPS27A','SBSN','CASP14','PIP','SERPINB4','S100A8','S100A7','KRT78','APOC1','APOC2','FLG','S100A9','DEFA1','SERPINB12','CSTA','MUCL1','SCGB1D2','DSC1','CALML5','PKP1','KRT3','GGT3P','APOC4','KRT80','UBC','RAC3','SYTL4','GPATCH8','TGM3','SEMG1','CDSN','XP32','SAA4','ARG1','SERPINB3','SEMG2','KRT20','S100A14','GGCT','TGM1','ALOX12B','CTSD','LOR','GSDMA','PRDX2','ASAH1','DSC3','NCCRP1','ARPC5','S100A11','CST6','ORC4','SPRR2E','DYNC2H1','GVINP1','IGLC7','IGLC1','F5','ACTBL2','TUBB4A','APCS','PZP','ARF1','C5','DSCAML1','SH3BGRL','SAA2','CDH1','TUBB1','CFHR2','CAMP','ITGA2B','KRT4','ITGB3','KRT19','ANG','CETP','IGHV1-2'
    ]
  },
  {
    id: 'PLT EV-pC (33)',
    label: 'PLT EV-pC (33)',
    genes: [
      'ACTG1','IGHG1','IGHG4','HPR','HLA-B','LPA','C9','IGKV3D-20','RAB6A','IGHV3-66','ACTR3','TXN','PLG','KLKB1','SH3BGRL','PGD','G6PD','SAA1','NRGN','WBP2','IGLL5','RAB8A','CAPZA2','KRT6B','GP5','ACTR2','TKT','PDLIM1','IGHV3-23','PIP4K2A','PSMA6','CD55','TSPAN9'
    ]
  },
  {
    id: 'HCT EV-pC (54)',
    label: 'HCT EV-pC (54)',
    genes: [
      'IGHM','IGM','CPOX','C7','C4A','C4B','C3','MBL2','CLU','IGKC','IGK','GNAS','HPR','PF4','IGHA2','IGHV5-51','IGLL5','C9','JCHAIN','ENO3','C4BPA','PRDX2','IGKV4-1','C6','CFP','ACTN4','C4BPB','IGKV3-20','HRG','HSPA1A','SLC29A1','VTN','C2','ITGA6','IGHG2','RPSA','MYH9','IGHV4-34','CROCC','GNAI3','CFH','CD5L','CTNNB1','IGHA1','VWF','IQGAP1','FASN','CLTCL1','IGLV1-47','FN1','CCT4','IGLC2','MSN','IGHG4'
    ]
  },
  {
    id: 'RBC EV-pC (17)',
    label: 'RBC EV-pC (17)',
    genes: [
      'CNP','DSG1','LRP6','CD58','ART4','RHD','CYBRD1','FABP5','PIP','ALB','CALML5','STIP1','MDH1','CA3','TKT','LDHA','PDCD4'
    ]
  },
  {
    id: 'MSC EV-sC (44)',
    label: 'MSC EV-sC (44)',
    genes: [
      'ITIH4','CFB','SERPINA1','PROS1','APOA1','PIGR','PLG','THBS1','SERPINC1','C1S','C9','SERPINF1','A1BG','ORM1','SERPINA3','F9','APOA4','HBB','APOH','HPX','LBP','C1QB','GC','PGLYRP1','MBL2','HBA','AFP','APOE','C4','C1QA','PSMB9','GPX3','NFIL3','URAD','ARL8B','CABP5','ASB8','GUCA1A','ATP6V1E1','FETUB','LYSMD1','RAP2C','RTCA','PCLAF'
    ]
  },
  {
    id: 'Liposome-pC (90)',
    label: 'Liposome-pC (90)',
    genes: [
      'CLU','APOE','PF4','PROS1','APOC3','LPA','C1S','F11','APOB','ANGPTL6','VTN','F5','MASP1','APOC2','FBLN1','PRG4','CD5L','SERPINF1','C9','C1R','APOD','APOA4','C4BPA','IGHG4','PON1','C6','APOL1','IGHD','FGG','APOA5','COLEC11','C4A','IGKV3-11','IGFALS','C1QC','DCD','IGHV4-34','C1QB','APOM','FGA','CFHR1','C8B','C7','KLKB1','FN1','CFI','JCHAIN','PLTP','ITIH4','FGB','ITIH1','IGLV3-19','VWF','C5','FGL1','C8A','SERPINA3','AHSG','CFH','HRG','IGHA2','IGHM','IGHV3-13','IGHV3-23','C3','SERPINF2','KNG1','AMBP','PLG','IGKV3-20','IGHA1','A2M','SERPIND1','CFB','APCS','AZGP1','IGLV3-21','IGLC2','GC','HP','IGKC','APOH','TF','CP','ITIH2','SERPINA1','APOA2','GIGYF2','IGKV2D-28','APOC1'
    ]
  },
  {
    id: 'NP-pC (185)',
    label: 'NP-pC (185)',
    genes: [
      'ALB','HP','APOA1','IGKC','TF','APOA4','F2','APOH','CFH','LRRC36','APOB','IGHG1','A2M','IGHA1','KCTD12','KLKB1','HPR','APOA2','IGLC2','ITIH2','IGLL5','IGHM','FGG','SERPINA1','KRT2','C3','KRT8','SERPING1','FGA','HPX','IGLC7','SERPINA3','C4A','C4B','CLU','CFB','SERPINC1','IGHG4','PURB','PLG','FGB','KRT79','IGHA2','APOE','AMBP','CALN1','CP','ORM1','AZGP1','IGHG3','HRG','KNG1','PZP','LUM','HBB','IGHG2','LMNB1','ITIH1','A1BG','PON1','AGT','C4BPA','TMEM106C','VTN','C1S','APCS','KRT38','ORM2','CPN2','GC','C5','KRT14','AHSG','KRT9','JCHAIN','TTR','KRT76','C8A','RBMX','KRT10','VDAC1','NCK2','FN1','KRT32','PNMA1','HBA1','REG3G','CD5L','C8B','SERPINF2','CABP1','LRRC20','C1R','KRT4','IGKV1-5','KRT1','NELFE','ITIH4','APOD','CCDC78','CEACAM1','KRT5','LGALS3BP','TBC1D32','C1QB','NAP1L4','SERPINF1','PPP4R2','CALHM2','COMP','IGHD','MGAT2','SLC25A29','IL18','C8G','F10','FCN3','RLBP1','KRT16','KCNIP4','GOSR2','C1QC','RMDN3','HAPLN4','ZER1','BNC2','PLTP','APOC3','RNF219','SLC4A1','KRT24','DCAF12L1','SLC2A1','KRT19','ARPC2','CFP','FBLN1','ACTG1','APOM','BCL2','KRT18','CABP2','MARCKS','GAPDH','C9','TUBB4A','STOM','C1QA','POTEF','KRT6B','SPTA1','RNF39','SAA1','ITGA2B','APOL1','KRT12','MYL6','CCDC27','APOC2','APOA5','KRT15','CFHR1','CHAD','STAC','HLA-A','RAP1B','LBP','KRT77','TTLL11','ACTA2','CETP','POTEE','KRT17','ERICH1','KRT33B','CASP6','KRT6A','EGLN2','HTR4','KRT73','KRT27','LGALS13','DNASE1L2','VPS37B','UBE2S'
    ]
  }
];

const DEFAULT_COLORS = {
  'All EV-pC (291)': '#667eea',
  'THP1 EV-pC (healthy) (186)': '#f6ad55',
  'THP1 EV-pC (RA) (126)': '#48bb78',
  'THP1 EV-pC (combined) (204)': '#f56565',
  'PLT EV-pC (33)': '#9f7aea',
  'HCT EV-pC (54)': '#38b2ac',
  'RBC EV-pC (17)': '#ed8936',
  'MSC EV-sC (44)': '#4c51bf',
  'Liposome-pC (90)': '#2b6cb0',
  'NP-pC (185)': '#2f855a',
  'User Input': '#805ad5'
};

const COLORS = { ...DEFAULT_COLORS };

const DATASET_DESCRIPTIONS = {
  'All EV-pC (291)': 'Plasma protein corona of diverse EV populations',
  'THP1 EV-pC (healthy) (186)': 'Plasma protein corona (healthy subjects) of THP-1 monocyte-derived EVs',
  'THP1 EV-pC (RA) (126)': 'Plasma protein corona (rheumatoid arthritis patients) of THP-1 monocyte-derived EVs',
  'THP1 EV-pC (combined) (204)': 'Plasma protein corona (combined healthy subjects and RA patients) of THP-1 monocyte-derived EVs',
  'PLT EV-pC (33)': 'Plasma protein corona of human platelets',
  'HCT EV-pC (54)': 'Plasma protein corona of HCT epithelial cell-derived EVs',
  'RBC EV-pC (17)': 'Plasma protein corona of red blood cell-derived EVs',
  'MSC EV-sC (44)': 'Serum protein corona of mesenchymal stem cell-derived EVs',
  'Liposome-pC (90)': 'Plasma protein corona of liposomes',
  'NP-pC (185)': 'Plasma protein corona of polystylene nanoparticles'
};

const MAX_SETS = 5;
const TOOLTIP_PREVIEW_COUNT = 3;

const datasetToggles = document.getElementById('dataset-toggles');
const userInput = document.getElementById('user-input');
const vennContainer = document.getElementById('venn-diagram');
const tooltip = document.getElementById('tooltip');
const userInputToggle = document.getElementById('user-input-toggle');
const userInputName = document.getElementById('user-input-name');
const userInputColor = document.getElementById('user-input-color');
const downloadIntersectionsBtn = document.getElementById('download-intersections');
const downloadSvgBtn = document.getElementById('download-svg');
const downloadPngBtn = document.getElementById('download-png');
const downloadTiffBtn = document.getElementById('download-tiff');

let lastExclusiveMap = null;
let lastDatasets = null;

const normalizedDatasets = DATASETS.map(ds => ({
  id: ds.id,
  label: ds.label,
  set: normalizeGeneList(ds.genes)
}));

function normalizeGeneSymbol(value) {
  return value.trim().toUpperCase();
}

function normalizeGeneList(list) {
  const genes = new Set();
  list.forEach(entry => {
    const raw = String(entry || '').trim();
    if (!raw) return;
    raw.split(/[,;\s]+/).forEach(part => {
      const gene = normalizeGeneSymbol(part);
      if (gene) genes.add(gene);
    });
  });
  return genes;
}

function parseTextGenes(text) {
  return text
    .split(/[\s,]+/)
    .map(token => normalizeGeneSymbol(token))
    .filter(Boolean);
}

function updateVisualization() {
  const selectedDatasets = normalizedDatasets.filter(ds => {
    const checkbox = document.querySelector(`input[data-dataset="${ds.id}"]`);
    return checkbox && checkbox.checked;
  });

  const userGenes = normalizeGeneList(parseTextGenes(userInput.value));
  const datasets = [...selectedDatasets];
  if (userInputToggle && userInputToggle.checked) {
    const nameBase = (userInputName && userInputName.value.trim()) || 'User Input';
    datasets.push({ id: 'User Input', label: `${nameBase} (${userGenes.size})`, set: userGenes });
  }

  if (datasets.length > MAX_SETS) {
    renderMessage('Select up to 5 datasets total.');
    return;
  }

  if (datasets.length === 0) {
    renderMessage('Select at least one dataset to visualize.');
    return;
  }

  const exclusiveMap = computeExclusiveIntersections(datasets);
  lastExclusiveMap = exclusiveMap;
  lastDatasets = datasets;
  renderVennDiagram(datasets, exclusiveMap);
  enforceSelectionLimit();
}

function computeExclusiveIntersections(datasets) {
  const map = new Map();
  const combos = getAllCombinations(datasets);
  combos.forEach(included => {
    const excluded = datasets.filter(ds => !included.includes(ds));
    let genes = intersectSets(included.map(ds => ds.set));
    excluded.forEach(ds => {
      genes = subtractSet(genes, ds.set);
    });
    const key = included.map(ds => ds.id).sort().join('∩');
    map.set(key, {
      size: genes.size,
      genes,
      label: included.map(ds => ds.label).join(' ∩ '),
      includedIds: included.map(ds => ds.id),
      excludedIds: excluded.map(ds => ds.id)
    });
  });
  return map;
}

function getAllCombinations(datasets) {
  const results = [];
  const n = datasets.length;
  for (let i = 1; i < (1 << n); i++) {
    const group = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) group.push(datasets[j]);
    }
    results.push(group);
  }
  return results;
}

function intersectSets(sets) {
  if (sets.length === 0) return new Set();
  let result = new Set(sets[0]);
  for (let i = 1; i < sets.length; i++) {
    result = new Set([...result].filter(item => sets[i].has(item)));
  }
  return result;
}

function subtractSet(base, remove) {
  return new Set([...base].filter(item => !remove.has(item)));
}

function renderVennDiagram(datasets, exclusiveMap) {
  vennContainer.innerHTML = '';
  const width = vennContainer.clientWidth || 800;
  const height = vennContainer.clientHeight || 600;

  const svg = d3.select('#venn-diagram')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const zoomGroup = svg.append('g').attr('class', 'venn-zoom-layer');

  const zoom = d3.zoom()
    .scaleExtent([0.5, 4])
    .on('zoom', event => {
      zoomGroup.attr('transform', event.transform);
    });

  svg.call(zoom);

  const layout = EVennCoronaLayout(datasets, width, height);
  const shapes = layout.shapes;
  const diagramCenter = layout.center;

  const shapeGroup = zoomGroup.append('g').attr('class', 'venn-shapes');
  shapes.forEach(shape => {
    const color = COLORS[shape.id] || '#667eea';
    shapeGroup.append('ellipse')
      .attr('cx', shape.cx)
      .attr('cy', shape.cy)
      .attr('rx', shape.rx)
      .attr('ry', shape.ry)
      .attr('transform', `rotate(${shape.rotation} ${shape.cx} ${shape.cy})`)
      .attr('fill', color)
      .attr('fill-opacity', 0.45)
      .attr('stroke', color)
      .attr('stroke-width', 2)
      .style('pointer-events', 'none');
  });

  const labelGroup = zoomGroup.append('g').attr('class', 'intersection-labels');
  exclusiveMap.forEach(region => {
    const centroid = computeRegionCentroid(region, shapes, layout.bounds);
    if (!centroid) return;

    const label = labelGroup.append('text')
      .attr('class', 'venn-intersection-label')
      .attr('x', centroid.x)
      .attr('y', centroid.y)
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .text(region.size);

    enableIntersectionDragging(label, region, shapes);
    label.on('mouseover', event => {
      showTooltip(event, region.label, Array.from(region.genes), region.size);
    })
    .on('mousemove', event => updateTooltipPosition(event))
    .on('mouseout', hideTooltip)
    .on('click', () => {
      openGenesWindow(region.label, Array.from(region.genes));
    });
  });

  renderDatasetLabels(zoomGroup, datasets, diagramCenter, layout.bounds, shapes, exclusiveMap);
}

function EVennCoronaLayout(datasets, width, height) {
  const center = { x: width / 2, y: height / 2 };
  const minSide = Math.min(width, height);
  const baseRadius = minSide * 0.22;
  const shapes = [];

  if (datasets.length === 1) {
    shapes.push(createEllipse(datasets[0], center.x, center.y, baseRadius, baseRadius, 0));
  } else if (datasets.length === 2) {
    const offset = baseRadius * 0.75;
    shapes.push(createEllipse(datasets[0], center.x - offset, center.y, baseRadius, baseRadius, 0));
    shapes.push(createEllipse(datasets[1], center.x + offset, center.y, baseRadius, baseRadius, 0));
  } else if (datasets.length === 3) {
    const offset = baseRadius * 0.85;
    const angles = [-90, 30, 150];
    angles.forEach((angle, i) => {
      const rad = angle * Math.PI / 180;
      shapes.push(createEllipse(datasets[i], center.x + offset * Math.cos(rad), center.y + offset * Math.sin(rad), baseRadius, baseRadius, 0));
    });
  } else if (datasets.length === 4) {
    const baseEllipse = { cx: 212.13203, cy: 547.98737, rx: 90.913727, ry: 43.941635 };
    const matrices = [
      { a: 0.8154688, b: 0.9718378, c: -3.2658914, d: 2.7404083, e: 2095.7634, f: -684.24772 },
      { a: 0.8154688, b: 0.9718378, c: -3.2658914, d: 2.7404083, e: 2023.7972, f: -770.01359 },
      { a: 0.8154688, b: -0.9718378, c: 3.2658914, d: 2.7404083, e: -1552.8678, f: -357.69765 },
      { a: 0.8154688, b: -0.9718378, c: 3.2658914, d: 2.7404083, e: -1624.8339, f: -271.93179 }
    ];
    const svgEllipses = matrices.map(matrix => svgMatrixToEllipse(baseEllipse, matrix));
    const svgBounds = computeBoundingBox(svgEllipses);
    const targetSize = minSide * 0.72;
    const scale = targetSize / Math.max(svgBounds.width, svgBounds.height);
    const svgCenter = {
      x: (svgBounds.minX + svgBounds.maxX) / 2,
      y: (svgBounds.minY + svgBounds.maxY) / 2
    };
    svgEllipses.forEach((ellipse, i) => {
      const cx = center.x + (ellipse.cx - svgCenter.x) * scale;
      const cy = center.y + (ellipse.cy - svgCenter.y) * scale;
      shapes.push(createEllipse(
        datasets[i],
        cx,
        cy,
        ellipse.rx * scale,
        ellipse.ry * scale,
        ellipse.rotation
      ));
    });
  } else if (datasets.length === 5) {
    const sizeScale = 0.8;
    const layoutScale = (baseRadius / 160) * sizeScale;
    const baseOffset = { x: 36 * layoutScale, y: -56 * layoutScale };
    const rx = 160 * layoutScale;
    const ry = 320 * layoutScale;
    for (let i = 0; i < datasets.length; i++) {
      const angle = i * 72;
      const rad = angle * Math.PI / 180;
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      const offsetX = baseOffset.x * cos - baseOffset.y * sin;
      const offsetY = baseOffset.x * sin + baseOffset.y * cos;
      const cx = center.x + offsetX;
      const cy = center.y + offsetY;
      shapes.push(createEllipse(datasets[i], cx, cy, rx, ry, angle));
    }
  } else {
    const orbitRadius = baseRadius * 0.68;
    const rx = baseRadius * 1.2;
    const ry = baseRadius * 0.7;
    for (let i = 0; i < datasets.length; i++) {
      const angle = -90 + i * 72;
      const rad = angle * Math.PI / 180;
      const cx = center.x + orbitRadius * Math.cos(rad);
      const cy = center.y + orbitRadius * Math.sin(rad);
      const rotation = angle + 180;
      shapes.push(createEllipse(datasets[i], cx, cy, rx, ry, rotation));
    }
  }

  const bounds = computeBoundingBox(shapes);
  return { shapes, center, bounds };
}

function createEllipse(dataset, cx, cy, rx, ry, rotation) {
  return {
    id: dataset.id,
    label: dataset.label,
    cx,
    cy,
    rx,
    ry,
    rotation
  };
}

function svgMatrixToEllipse(baseEllipse, matrix) {
  const { cx, cy, rx, ry } = baseEllipse;
  const { a, b, c, d, e, f } = matrix;
  const centerX = a * cx + c * cy + e;
  const centerY = b * cx + d * cy + f;

  const t11 = a * rx;
  const t12 = c * ry;
  const t21 = b * rx;
  const t22 = d * ry;

  const sxx = t11 * t11 + t12 * t12;
  const sxy = t11 * t21 + t12 * t22;
  const syy = t21 * t21 + t22 * t22;

  const trace = sxx + syy;
  const det = sxx * syy - sxy * sxy;
  const temp = Math.sqrt(Math.max(0, (trace * trace) / 4 - det));
  let lambda1 = trace / 2 + temp;
  let lambda2 = trace / 2 - temp;

  let rxOut = Math.sqrt(Math.max(0, lambda1));
  let ryOut = Math.sqrt(Math.max(0, lambda2));
  let rotation = 0.5 * Math.atan2(2 * sxy, sxx - syy) * 180 / Math.PI;

  if (rxOut < ryOut) {
    const swap = rxOut;
    rxOut = ryOut;
    ryOut = swap;
    rotation += 90;
  }

  return {
    cx: centerX,
    cy: centerY,
    rx: rxOut,
    ry: ryOut,
    rotation
  };
}

function computeBoundingBox(shapes) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  shapes.forEach(shape => {
    const rotationRad = shape.rotation * Math.PI / 180;
    const cos = Math.cos(rotationRad);
    const sin = Math.sin(rotationRad);
    const xExtent = Math.sqrt((shape.rx * cos) ** 2 + (shape.ry * sin) ** 2);
    const yExtent = Math.sqrt((shape.rx * sin) ** 2 + (shape.ry * cos) ** 2);

    minX = Math.min(minX, shape.cx - xExtent);
    maxX = Math.max(maxX, shape.cx + xExtent);
    minY = Math.min(minY, shape.cy - yExtent);
    maxY = Math.max(maxY, shape.cy + yExtent);
  });

  return {
    minX,
    maxX,
    minY,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}

function renderDatasetLabels(svg, datasets, center, bounds, shapes, exclusiveMap) {
  const baseRadius = Math.max(bounds.width, bounds.height) / 2;
  const fontSize = 12;
  const padding = fontSize * 1.8;
  let labels = [];

  if (datasets.length >= 4) {
    const shapeMap = new Map(shapes.map(shape => [shape.id, shape]));
    labels = datasets.map(dataset => {
      const shape = shapeMap.get(dataset.id);
      if (!shape) return null;
      let direction = null;
      let originX = shape.cx;
      let originY = shape.cy;
      if (datasets.length === 5 && exclusiveMap) {
        const regionKey = dataset.id;
        const region = exclusiveMap.get(regionKey);
        if (region) {
          const centroid = computeRegionCentroid(region, shapes, bounds);
          if (centroid) {
            const dx = centroid.x - shape.cx;
            const dy = centroid.y - shape.cy;
            const len = Math.hypot(dx, dy) || 1;
            direction = { x: dx / len, y: dy / len };
            originX = centroid.x;
            originY = centroid.y;
          }
        }
      }
      if (!direction) {
        const rotationRad = (shape.rotation || 0) * Math.PI / 180;
        direction = { x: Math.cos(rotationRad), y: Math.sin(rotationRad) };
        const toCenter = { x: center.x - shape.cx, y: center.y - shape.cy };
        if (direction.x * toCenter.x + direction.y * toCenter.y > 0) {
          direction = { x: -direction.x, y: -direction.y };
        }
      }
      let baseDistance = Math.max(shape.rx, shape.ry) + padding * 0.01;
      let x = originX + direction.x * baseDistance * 0.05;
      let y = originY + direction.y * baseDistance * 0.05;
      while (isInsideAny({ x, y }, shapes)) {
        baseDistance += padding * 0.01;
        x = originX + direction.x * baseDistance * 0.05;
        y = originY + direction.y * baseDistance * 0.05;
      }
      return {
        dataset,
        direction,
        distance: baseDistance,
        originX,
        originY,
        x,
        y,
        anchor: direction.x < -0.1 ? 'end' : direction.x > 0.1 ? 'start' : 'middle'
      };
    }).filter(Boolean);
  } else {
    const angles = getLabelAngles(datasets.length);
    labels = datasets.map((dataset, index) => {
      const angle = angles[index] ?? (index * 360 / datasets.length);
      const rad = (angle - 90) * Math.PI / 180;
      const radius = baseRadius + padding;
      return {
        dataset,
        angle,
        radius,
        x: center.x + radius * Math.cos(rad),
        y: center.y + radius * Math.sin(rad),
        anchor: angle > 90 && angle < 270 ? 'end' : angle === 90 || angle === 270 ? 'middle' : 'start'
      };
    });
  }

  const labelGroup = svg.append('g').attr('class', 'dataset-labels');
  const labelNodes = labels.map(label => {
    const node = labelGroup.append('text')
      .attr('class', 'venn-label')
      .attr('x', label.x)
      .attr('y', label.y)
      .attr('text-anchor', label.anchor)
      .style('fill', COLORS[label.dataset.id] || '#333')
      .text(label.dataset.label);
    enableLabelDragging(node);
    return { ...label, node };
  });

  resolveLabelCollisions(labelNodes, center, baseRadius, padding);

  // no connector lines for 5-set layout
}

function getLabelAngles(count) {
  if (count === 1) return [0];
  if (count === 2) return [315, 45];
  if (count === 3) return [0, 135, 225];
  if (count === 4) return [45, 135, 225, 315];
  if (count === 5) return [0, 72, 144, 216, 288];
  const angles = [];
  for (let i = 0; i < count; i++) angles.push((360 / count) * i);
  return angles;
}

function resolveLabelCollisions(labelNodes, center, baseRadius, padding) {
  const maxIterations = 10;
  for (let iter = 0; iter < maxIterations; iter++) {
    let moved = false;
    for (let i = 0; i < labelNodes.length; i++) {
      for (let j = i + 1; j < labelNodes.length; j++) {
        const a = labelNodes[i];
        const b = labelNodes[j];
        const boxA = a.node.node().getBBox();
        const boxB = b.node.node().getBBox();
        const overlap = boxA.x < boxB.x + boxB.width &&
          boxA.x + boxA.width > boxB.x &&
          boxA.y < boxB.y + boxB.height &&
          boxA.y + boxA.height > boxB.y;
        if (overlap) {
          if (a.direction) {
            a.distance += padding;
            updateDirectionalLabel(a);
          } else {
            a.radius += padding;
            updateLabelPosition(a, center);
          }
          if (b.direction) {
            b.distance += padding;
            updateDirectionalLabel(b);
          } else {
            b.radius += padding;
            updateLabelPosition(b, center);
          }
          moved = true;
        }
      }
    }
    if (!moved) break;
  }

  labelNodes.forEach(label => {
    if (label.direction) {
      if (label.distance < baseRadius + padding) {
        label.distance = baseRadius + padding;
        updateDirectionalLabel(label);
      }
    } else if (label.radius < baseRadius + padding) {
      label.radius = baseRadius + padding;
      updateLabelPosition(label, center);
    }
  });
}

function updateLabelPosition(label, center) {
  const rad = (label.angle - 90) * Math.PI / 180;
  label.x = center.x + label.radius * Math.cos(rad);
  label.y = center.y + label.radius * Math.sin(rad);
  label.node.attr('x', label.x).attr('y', label.y);
}

function updateDirectionalLabel(label) {
  label.x = label.originX + label.direction.x * label.distance;
  label.y = label.originY + label.direction.y * label.distance;
  label.node.attr('x', label.x).attr('y', label.y);
}


function computeRegionCentroid(region, shapes, bounds) {
  const includedShapes = shapes.filter(shape => region.includedIds.includes(shape.id));
  const excludedShapes = shapes.filter(shape => region.excludedIds.includes(shape.id));

  if (includedShapes.length === 0) return null;

  const sampleBounds = boundingBoxForShapes(includedShapes);
  const step = Math.max(4, Math.min(sampleBounds.width, sampleBounds.height) / 40);

  let sumX = 0;
  let sumY = 0;
  let count = 0;

  for (let x = sampleBounds.minX; x <= sampleBounds.maxX; x += step) {
    for (let y = sampleBounds.minY; y <= sampleBounds.maxY; y += step) {
      const point = { x, y };
      if (!isInsideAll(point, includedShapes)) continue;
      if (isInsideAny(point, excludedShapes)) continue;
      sumX += x;
      sumY += y;
      count++;
    }
  }

  if (count === 0) return null;
  return { x: sumX / count, y: sumY / count };
}

function boundingBoxForShapes(shapes) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  shapes.forEach(shape => {
    const rotationRad = shape.rotation * Math.PI / 180;
    const cos = Math.cos(rotationRad);
    const sin = Math.sin(rotationRad);
    const xExtent = Math.sqrt((shape.rx * cos) ** 2 + (shape.ry * sin) ** 2);
    const yExtent = Math.sqrt((shape.rx * sin) ** 2 + (shape.ry * cos) ** 2);

    minX = Math.min(minX, shape.cx - xExtent);
    maxX = Math.max(maxX, shape.cx + xExtent);
    minY = Math.min(minY, shape.cy - yExtent);
    maxY = Math.max(maxY, shape.cy + yExtent);
  });

  return { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY };
}

function isInsideAll(point, shapes) {
  return shapes.every(shape => isPointInEllipse(point, shape));
}

function isInsideAny(point, shapes) {
  return shapes.some(shape => isPointInEllipse(point, shape));
}

function isPointInEllipse(point, shape) {
  const rotationRad = -shape.rotation * Math.PI / 180;
  const dx = point.x - shape.cx;
  const dy = point.y - shape.cy;
  const cos = Math.cos(rotationRad);
  const sin = Math.sin(rotationRad);
  const x = dx * cos - dy * sin;
  const y = dx * sin + dy * cos;
  return (x * x) / (shape.rx * shape.rx) + (y * y) / (shape.ry * shape.ry) <= 1;
}


function renderMessage(message) {
  vennContainer.innerHTML = `<div style="text-align: center; color: #999; padding: 50px;">${message}</div>`;
}

function showTooltip(event, label, genes, count) {
  const cleanedLabel = label
    .split(' ∩ ')
    .map(cleanDatasetLabel)
    .join(' ∩ ');
  const preview = genes.slice(0, TOOLTIP_PREVIEW_COUNT);
  const remaining = Math.max(0, genes.length - preview.length);
  const items = preview.join(', ');
  const more = remaining > 0 ? `<br/>+ ${remaining} more` : '';

  tooltip.innerHTML = `<strong>${cleanedLabel}</strong><br/>${items}${more}`;
  tooltip.style.display = 'block';
  updateTooltipPosition(event);
}

function cleanDatasetLabel(value) {
  return value.replace(/\s*\(\d+\)\s*$/, '');
}

function openGenesWindow(label, genes) {
  const cleanedLabel = label
    .split(' ∩ ')
    .map(cleanDatasetLabel)
    .join(' ∩ ');
  const safeTitle = cleanedLabel.replace(/\"/g, '&quot;');
  const geneList = genes.length ? genes.join('<br/>') : 'No genes found.';
  const html = `
    <html>
      <head>
        <title>${safeTitle}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 16px; }
          h2 { margin-bottom: 12px; }
          .genes { white-space: pre-wrap; line-height: 1.4; }
        </style>
      </head>
      <body>
        <h2>${safeTitle}</h2>
        <div class="genes">${geneList}</div>
      </body>
    </html>
  `;
  const win = window.open('', '_blank', 'width=600,height=700,scrollbars=yes');
  if (!win) return;
  win.document.open();
  win.document.write(html);
  win.document.close();
}

function hideTooltip() {
  tooltip.style.display = 'none';
}

function updateTooltipPosition(event) {
  const offset = 12;
  tooltip.style.left = `${event.clientX + offset}px`;
  tooltip.style.top = `${event.clientY + offset}px`;
}

function enableLabelDragging(selection) {
  selection
    .style('cursor', 'move')
    .call(
      d3.drag()
        .subject(function() {
          const node = d3.select(this);
          return { x: +node.attr('x'), y: +node.attr('y') };
        })
        .on('start', event => {
          if (event.sourceEvent) {
            event.sourceEvent.stopPropagation();
          }
        })
        .on('drag', function(event) {
          const node = d3.select(this);
          node
            .attr('x', event.x)
            .attr('y', event.y);
        })
    );
}

function enableIntersectionDragging(selection, region, shapes) {
  selection
    .style('cursor', 'move')
    .call(
      d3.drag()
        .subject(function() {
          const node = d3.select(this);
          return { x: +node.attr('x'), y: +node.attr('y') };
        })
        .on('start', event => {
          if (event.sourceEvent) {
            event.sourceEvent.stopPropagation();
          }
        })
        .on('drag', function(event) {
          const node = d3.select(this);
          const candidate = { x: event.x, y: event.y };
          if (isPointInRegion(candidate, region, shapes)) {
            node.attr('x', candidate.x).attr('y', candidate.y);
          }
        })
    );
}

function isPointInRegion(point, region, shapes) {
  const included = shapes.filter(shape => region.includedIds.includes(shape.id));
  const excluded = shapes.filter(shape => region.excludedIds.includes(shape.id));
  if (!included.length) return false;
  return isInsideAll(point, included) && !isInsideAny(point, excluded);
}

function setupControls() {
  normalizedDatasets.forEach(ds => {
    const row = document.createElement('div');
    row.className = 'dataset-toggle-row';

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = COLORS[ds.id] || '#667eea';
    colorInput.className = 'dataset-color-picker';
    colorInput.addEventListener('input', () => {
      COLORS[ds.id] = colorInput.value;
      updateVisualization();
    });

    const label = document.createElement('label');
    label.className = 'toggle-label';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.dataset = ds.id;
    checkbox.addEventListener('change', () => {
      enforceSelectionLimit();
      updateVisualization();
    });

    const text = document.createElement('span');
    text.textContent = ds.label;

    label.appendChild(checkbox);
    label.appendChild(text);
    row.appendChild(colorInput);
    row.appendChild(label);
    const description = DATASET_DESCRIPTIONS[ds.id];
    if (description) {
      row.title = description;
      label.title = description;
    }
    datasetToggles.appendChild(row);
  });

  userInput.addEventListener('input', updateVisualization);
  if (userInputToggle) {
    userInputToggle.addEventListener('change', () => {
      enforceSelectionLimit();
      updateVisualization();
    });
  }
  if (userInputName) {
    userInputName.addEventListener('input', updateVisualization);
  }
  if (userInputColor) {
    userInputColor.value = COLORS['User Input'] || '#805ad5';
    userInputColor.addEventListener('input', () => {
      COLORS['User Input'] = userInputColor.value;
      updateVisualization();
    });
  }

  if (downloadSvgBtn) downloadSvgBtn.addEventListener('click', downloadSvg);
  if (downloadPngBtn) downloadPngBtn.addEventListener('click', downloadPng);
  if (downloadTiffBtn) downloadTiffBtn.addEventListener('click', downloadTiff);
  if (downloadIntersectionsBtn) downloadIntersectionsBtn.addEventListener('click', downloadIntersectionGenesCsv);
}

function downloadIntersectionGenesCsv() {
  const datasets = getActiveDatasets();
  if (!datasets.length) return;
  const exclusiveMap = computeExclusiveIntersections(datasets);
  const lines = ['Intersection,Count,Genes'];
  exclusiveMap.forEach(region => {
    const genes = Array.from(region.genes).join(';');
    const safeLabel = `"${region.label.replace(/\"/g, '\"\"')}"`;
    const safeGenes = `"${genes.replace(/\"/g, '\"\"')}"`;
    lines.push(`${safeLabel},${region.size},${safeGenes}`);
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, 'EVennCorona_protein_lists.csv');
  URL.revokeObjectURL(url);
}

function getActiveDatasets() {
  const selectedDatasets = normalizedDatasets.filter(ds => {
    const checkbox = document.querySelector(`input[data-dataset="${ds.id}"]`);
    return checkbox && checkbox.checked;
  });
  const datasets = [...selectedDatasets];
  if (userInputToggle && userInputToggle.checked) {
    const userGenes = normalizeGeneList(parseTextGenes(userInput.value));
    datasets.push({ id: 'User Input', label: `User Input (${userGenes.size})`, set: userGenes });
  }
  return datasets.slice(0, MAX_SETS);
}

function enforceSelectionLimit() {
  const checkboxes = Array.from(datasetToggles.querySelectorAll('input[type="checkbox"]'));
  const checked = checkboxes.filter(cb => cb.checked);
  const userChecked = userInputToggle && userInputToggle.checked ? 1 : 0;
  const limitReached = checked.length + userChecked >= MAX_SETS;
  checkboxes.forEach(cb => {
    if (!cb.checked) {
      cb.disabled = limitReached;
    } else {
      cb.disabled = false;
    }
  });
  if (userInputToggle) {
    userInputToggle.disabled = limitReached && !userInputToggle.checked;
  }
}


function getDiagramSvgElement() {
  const svg = vennContainer.querySelector('svg');
  if (!svg) return null;
  return svg;
}

function getExportBackgroundColor() {
  const panel = vennContainer.parentElement;
  if (!panel) return '#ffffff';
  const color = window.getComputedStyle(panel).backgroundColor;
  return color || '#ffffff';
}

function serializeSvg(svg) {
  const cloned = svg.cloneNode(true);
  const width = parseFloat(svg.getAttribute('width')) || svg.clientWidth || 800;
  const height = parseFloat(svg.getAttribute('height')) || svg.clientHeight || 600;
  cloned.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  cloned.setAttribute('width', width);
  cloned.setAttribute('height', height);
  cloned.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const bg = getExportBackgroundColor();
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('x', '0');
  rect.setAttribute('y', '0');
  rect.setAttribute('width', width);
  rect.setAttribute('height', height);
  rect.setAttribute('fill', bg);
  cloned.insertBefore(rect, cloned.firstChild);

  return new XMLSerializer().serializeToString(cloned);
}

function downloadSvg() {
  const svg = getDiagramSvgElement();
  if (!svg) return;
  const source = serializeSvg(svg);
  const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, 'EVennCorona.svg');
  URL.revokeObjectURL(url);
}

function downloadPng() {
  const svg = getDiagramSvgElement();
  if (!svg) return;
  const source = serializeSvg(svg);
  const image = new Image();
  const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = getExportBackgroundColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);
    URL.revokeObjectURL(url);
    const pngUrl = canvas.toDataURL('image/png');
    triggerDownload(pngUrl, 'EVennCorona.png');
  };
  image.src = url;
}

// PDF export removed

function downloadTiff() {
  const svg = getDiagramSvgElement();
  if (!svg) return;
  const source = serializeSvg(svg);
  const image = new Image();
  const svgBlob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  const dpi = 300;
  const scale = dpi / 96;

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(image.width * scale);
    canvas.height = Math.round(image.height * scale);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = getExportBackgroundColor();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    URL.revokeObjectURL(url);

    if (!window.UTIF) return;
    const rgba = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const tif = UTIF.encodeImage(rgba, canvas.width, canvas.height);
    const blob = new Blob([tif], { type: 'image/tiff' });
    const tiffUrl = URL.createObjectURL(blob);
    triggerDownload(tiffUrl, 'EVennCorona_300dpi.tiff');
    URL.revokeObjectURL(tiffUrl);
  };
  image.src = url;
}

function triggerDownload(url, filename) {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleFileUpload(event) {
}

setupControls();
updateVisualization();
