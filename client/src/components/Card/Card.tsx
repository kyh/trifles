import styled from "styled-components";

const border = (color: string) => {
  const c = color.replace("#", "");
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='158' height='157' viewBox='0 0 158 157'%3E%3Cg fill='%23${c}' fill-rule='evenodd' transform='translate(.387 .228)'%3E%3Cpath d='M151.946278.1273246C151.905278-.0436754001 151.818278.1483246 151.647278.1273246 147.770278.2473246 143.860278.3353246 139.853278.3263246 139.735278.4423246 139.499278.4403246 139.253278.4263246 139.036278.6103246 138.435278.4073246 138.254278.6263246 138.355278.9273246 138.031278.8033246 137.854278.8263246 137.622278.7943246 137.470278.8423246 137.354278.9263246L129.858278.9263246C129.108278.8443246 128.414278.7053246 127.659278.6263246 126.375278.6443246 125.121278.6333246 123.961278.5273246 122.926278.5953246 122.197278.3583246 121.162278.4263246 120.891278.3643246 120.369278.5533246 120.263278.3263246 118.369278.3443246 116.090278.3033246 114.365278.3263246 114.107278.3303246 113.811278.2363246 113.567278.4263246L113.067278.4263246C112.895278.4663246 112.811278.2783246 112.767278.4263246 107.612278.4363246 102.487278.4743246 97.4752781.6263246 92.4692781.6253246 87.3132781.5273246 82.2822781.7263246 77.5142781 1.0013246 72.1472781 1.1683246 67.1902781.9263246 65.3052781 1.2733246 62.8632781 1.0633246 60.8932781 1.3263246L41.5032781 1.3263246C41.2642781 1.3873246 40.7782781 1.2003246 40.7032781 1.4263246 37.8152781 1.3033246 34.2542781 1.4443246 31.0082781 1.4263246 29.9202781 1.4203246 28.8132781 1.2183246 27.8112781 1.4263246 23.4852781 1.5983246 18.7442781 1.3553246 14.6172781 1.7263246 13.5442781 1.6663246 12.4942781 1.5823246 11.3192781 1.6263246 11.0222781 1.5233246 10.5942781 1.5503246 10.4192781 1.3263246 10.2052781 1.1413246 9.68827806 1.2583246 9.32027806 1.2263246 8.63627806 1.0773246 7.84427806 1.0363246 7.12127806.9263246 6.52627806.9823246 5.88327806 1.1153246 5.32227806.9263246 4.87927806.8173246 4.82427806 1.0953246 4.52227806 1.1263246 4.49827806 1.4353246 4.02527806 1.2953246 4.12227806 1.7263246 4.32627806 1.8553246 4.22827806 2.2873246 4.52227806 2.3253246 4.66827806 2.5133246 5.17627806 2.3383246 5.32227806 2.5263246 5.87027806 2.6763246 6.48727806 2.7593246 7.02127806 2.9253246 10.0792781 2.7733246 13.2892781 3.1253246 16.5162781 3.1253246 19.7352781 3.1253246 22.9632781 2.7983246 26.0112781 2.9253246L35.9062781 2.9253246C37.3562781 3.1083246 38.9572781 3.1383246 40.6042781 3.1253246 42.0312781 3.1883246 43.7192781 3.0893246 45.3012781 3.0253246 56.5552781 3.2193246 68.6662781 2.5423246 80.2832781 2.8253246 81.1372781 2.6793246 81.9492781 2.4913246 82.8822781 2.4253246 84.2312781 2.3923246 85.5262781 2.5953246 86.7802781 2.6253246 87.4922781 2.6423246 88.5482781 2.5943246 88.6792781 2.7253246 88.9422781 2.9883246 88.9272781 2.4103246 89.1792781 2.7253246 89.2312781 2.7903246 89.3032781 2.6243246 89.2802781 2.6253246 89.6412781 2.6073246 90.0172781 2.6123246 90.3782781 2.6253246 91.6582781 2.6723246 92.9222781 2.8043246 94.2772781 2.8253246 95.5712781 2.8453246 96.9632781 2.8113246 98.3742781 2.9253246 104.153278 2.3743246 110.885278 2.7763246 116.965278 2.5263246 117.104278 2.2983246 117.660278 2.4883246 117.964278 2.4253246L119.163278 2.4253246C120.036278 2.3523246 120.600278 2.5893246 121.462278 2.5263246 122.778278 2.8093246 124.356278 2.8303246 125.860278 2.9253246 129.066278 2.8803246 131.984278 2.8043246 134.955278 2.9253246 136.199278 2.7033246 137.665278 2.7033246 139.154278 2.7253246 140.119278 2.4593246 141.444278 2.5503246 142.352278 2.2263246 143.491278 2.1333246 144.542278 1.9503246 145.650278 1.8263246 146.600278 1.7763246 147.759278 1.9363246 148.548278 1.7263246L150.048278 1.7263246C150.483278 1.7203246 150.815278 1.2173246 151.147278 1.4263246L153.146278 1.4263246C153.537278 1.3273246 153.727278 1.6473246 153.946278 1.4263246 154.350278 1.4633246 154.337278 1.0843246 154.545278.9263246 154.727278-.4186754 152.562278.0843245999 151.946278.1273246M3.12327806 151.448325C3.10527806 150.667325 3.09827806 150.371325 3.02427806 149.949325 2.90927806 146.132325 2.81927806 142.292325 2.82227806 138.356325 2.71527806 137.564325 2.61327806 136.767325 2.52427806 135.957325L2.52427806 130.959325C2.52427806 129.279325 2.45627806 127.624325 2.52427806 126.162325 2.39727806 122.797325 2.94727806 119.599325 2.72327806 116.467325 2.72827806 113.131325 2.77127806 109.756325 2.52427806 106.672325 2.34527806 103.485325 2.35927806 100.107325 2.12327806 96.9773246 1.99627806 96.0833246 2.40827806 95.7293246 2.32327806 94.8783246 2.41827806 92.0373246 2.06727806 90.0693246 2.22327806 87.9823246 2.33627806 84.2033246 2.32327806 80.4063246 2.32327806 76.5883246 2.32327806 72.8273246 1.91627806 69.0533246 2.22327806 65.3933246 1.94327806 63.8083246 2.02127806 61.8643246 1.92427806 60.0963246 1.69127806 53.3773246 1.89327806 46.9363246 1.82327806 40.3063246 1.79127806 37.2233246 1.72427806 34.0753246 1.72427806 30.9113246 1.72427806 27.6703246 1.83027806 24.4113246 1.62327806 21.2163246 1.94627806 16.8593246 1.84427806 12.6993246 1.82327806 8.9223246 1.92927806 7.6283246 2.10627806 6.4063246 2.22327806 5.1243246 2.12327806 4.7013246 2.04627806 4.0313246 2.22327806 3.6253246 2.36327806 2.8863246 1.83427806 2.8143246 1.72427806 2.3253246 1.41827806 2.2533246 1.43027806 2.4983246 1.12327806 2.4253246.968278056 2.5693246.776278056 2.6773246.725278056 2.9253246.740278056 3.2413246.728278056 3.5283246.524278056 3.6253246.561278056 4.2943246.315278056 4.6813246.225278056 5.2243246.342278056 7.7063246.190278056 10.1643246.0252780563 12.6203246-.00572194371 15.2493246.0802780563 17.7613246.225278056 20.2163246.254278056 22.6883246.225278056 25.2233246.225278056 27.8123246.225278056 30.3773246.268278056 32.9963246.125278056 35.5083246-.0367219437 38.0023246-.0467219437 40.4683246.125278056 42.9043246-.0527219437 45.4443246.266278056 47.8943246.0252780563 50.4013246.265278056 52.7593246.00427805629 55.6183246.225278056 57.9973246.298278056 60.5223246.361278056 63.0583246.324278056 65.6933246.717278056 68.0313246.672278056 70.8093246.824278056 73.3893246.576278056 75.3743246.744278056 77.3463246.725278056 79.2863246.720278056 79.7063246.612278056 80.1033246.624278056 80.2853246.623278056 80.2693246.712278056 80.3363246.725278056 80.3853246.738278056 80.4443246.724278056 80.5263246.725278056 80.5853246.734278056 82.2543246.553278056 83.6033246.524278056 85.0833246.451278056 88.7433246.371278056 92.5903246.225278056 96.6773246.687278056 101.112325.483278056 106.214325.524278056 111.069325 1.01527806 116.983325.252278056 123.572325.824278056 129.360325 1.09627806 132.110325 1.19527806 134.805325 1.12327806 137.756325 1.05327806 140.722325.967278056 143.731325 1.12327806 146.751325 1.28027806 147.827325 1.12727806 149.213325 1.32427806 150.249325 1.36327806 151.444325 1.36327806 152.675325 2.52427806 152.748325 3.02427806 152.615325 3.20127806 152.160325 3.12327806 151.448325M142.951278 154.447325C142.809278 154.441325 142.580278 154.351325 142.451278 154.348325 142.063278 154.339325 141.726278 154.442325 141.352278 154.447325 139.904278 154.471325 138.498278 154.329325 137.155278 154.148325 136.981278 154.319325 136.893278 154.132325 136.555278 154.247325L135.555278 154.247325C134.880278 154.175325 134.316278 154.511325 133.756278 154.247325 132.392278 154.216325 131.250278 154.406325 129.958278 154.447325 126.759278 154.657325 122.967278 154.725325 119.863278 154.548325 117.528278 154.414325 114.961278 154.447325 112.567278 154.447325 110.604278 154.447325 108.774278 154.362325 106.970278 154.048325 102.049278 153.922325 97.1802781 154.277325 92.4772781 154.048325 92.3502781 154.054325 92.3392781 154.176325 92.1782781 154.148325L85.8812781 154.148325C83.7592781 154.148325 81.6922781 154.269325 79.6842781 154.348325 75.7832781 154.596325 71.2032781 154.639325 67.1902781 154.447325 65.3052781 154.794325 62.8632781 154.584325 60.8932781 154.847325L41.5032781 154.847325C41.2642781 154.908325 40.7782781 154.722325 40.7032781 154.947325 37.8152781 154.824325 34.2542781 154.965325 31.0082781 154.947325 29.9202781 154.942325 28.8132781 154.739325 27.8112781 154.947325 23.4852781 155.120325 18.7442781 154.876325 14.6172781 155.247325 13.5442781 155.188325 12.4942781 155.104325 11.3192781 155.147325 11.0222781 155.044325 10.5942781 155.071325 10.4192781 154.847325 10.1782781 154.655325 9.61527806 154.784325 9.22027806 154.747325 8.55427806 154.580325 7.76427806 154.537325 7.02127806 154.447325 6.48627806 154.540325 5.84027806 154.611325 5.32227806 154.447325 4.87927806 154.338325 4.82427806 154.616325 4.52227806 154.648325 4.49827806 154.956325 4.02527806 154.817325 4.12227806 155.247325 4.32627806 155.376325 4.22827806 155.808325 4.52227806 155.847325 4.66827806 156.034325 5.17627806 155.859325 5.32227806 156.047325 5.87027806 156.198325 6.48727806 156.280325 7.02127806 156.446325 9.98327806 156.274325 12.9612781 156.647325 16.0162781 156.647325 19.0352781 156.647325 22.1182781 156.377325 25.2112781 156.446325 25.4202781 156.149325 25.7382781 156.579325 26.1122781 156.446325 29.1392781 156.507325 32.1002781 156.366325 35.0062781 156.446325 37.9062781 156.527325 40.7192781 156.777325 43.5022781 156.647325 49.4282781 156.497325 55.4692781 156.630325 61.6942781 156.446325 63.1922781 156.264325 64.7722781 156.347325 66.2912781 156.347325 71.0812781 156.347325 75.7682781 156.150325 80.2832781 156.347325 81.1722781 156.202325 81.9922781 155.989325 82.9832781 155.946325 84.6902781 156.026325 86.3042781 156.105325 87.8792781 156.147325 88.2722781 156.157325 88.5262781 156.214325 88.5792781 156.147325 88.6292781 156.083325 88.7052781 156.246325 88.6792781 156.246325 89.1532781 156.249325 89.7682781 156.120325 90.4792781 156.147325 91.7422781 156.194325 93.0512781 156.333325 94.3762781 156.347325 95.7152781 156.360325 97.0602781 156.349325 98.4742781 156.446325 104.422278 155.831325 111.564278 156.409325 117.664278 155.946325 120.004278 155.866325 121.750278 156.228325 123.961278 156.047325 124.696278 156.112325 125.391278 156.216325 126.060278 156.347325 127.362278 156.187325 128.703278 156.367325 130.058278 156.347325 132.120278 156.316325 134.303278 156.157325 136.155278 156.147325 136.493278 156.145325 136.831278 156.160325 137.155278 156.147325 137.526278 156.131325 137.664278 156.047325 137.854278 156.047325 137.929278 156.047325 138.054278 156.147325 138.054278 156.147325 138.242278 156.144325 138.275278 156.047325 138.453278 156.047325 138.756278 156.047325 138.881278 156.262325 139.053278 156.047325 139.105278 155.983325 139.179278 156.147325 139.154278 156.147325 140.115278 156.167325 140.807278 155.936325 141.653278 155.946325 143.315278 156.075325 145.431278 156.065325 147.150278 156.047325 147.865278 156.039325 148.423278 155.992325 148.848278 156.047325 148.945278 155.799325 149.232278 156.185325 149.548278 156.047325 149.919278 155.976325 149.977278 156.217325 150.348278 156.147325 150.852278 156.018325 151.365278 155.899325 152.047278 155.946325 152.285278 155.886325 152.772278 156.072325 152.846278 155.847325 153.160278 155.827325 153.117278 155.451325 153.546278 155.547325 153.647278 155.348325 153.988278 155.390325 153.946278 155.047325 154.145278 154.913325 154.379278 154.814325 154.446278 154.548325 150.648278 154.381325 146.607278 154.640325 142.951278 154.447325M156.744278 151.448325C156.726278 150.667325 156.719278 150.371325 156.645278 149.949325 156.530278 146.132325 156.440278 142.292325 156.445278 138.356325 156.337278 137.564325 156.234278 136.767325 156.145278 135.957325L156.145278 130.959325C156.145278 129.279325 156.077278 127.624325 156.145278 126.162325 156.019278 122.797325 156.570278 119.599325 156.345278 116.467325 156.349278 113.131325 156.392278 109.756325 156.145278 106.672325 155.966278 103.485325 155.980278 100.107325 155.744278 96.9773246 155.617278 96.0833246 156.030278 95.7293246 155.945278 94.8783246 156.040278 92.0373246 155.689278 90.0693246 155.845278 87.9823246 155.957278 84.2033246 155.945278 80.4063246 155.945278 76.5883246 155.945278 72.8273246 155.538278 69.0533246 155.845278 65.3933246 155.564278 63.8083246 155.642278 61.8643246 155.545278 60.0963246 155.312278 53.3773246 155.515278 46.9363246 155.446278 40.3063246 155.412278 37.2233246 155.345278 34.0753246 155.345278 30.9113246 155.345278 27.6703246 155.452278 24.4113246 155.245278 21.2163246 155.567278 16.8593246 155.465278 12.6993246 155.446278 8.9223246 155.551278 7.6283246 155.728278 6.4063246 155.845278 5.1243246 155.744278 4.7013246 155.667278 4.0313246 155.845278 3.6253246 155.984278 2.8863246 155.456278 2.8143246 155.345278 2.3253246 155.039278 2.2533246 155.051278 2.4983246 154.745278 2.4253246 154.589278 2.5693246 154.398278 2.6773246 154.346278 2.9253246 154.362278 3.2413246 154.349278 3.5283246 154.146278 3.6253246 154.182278 4.2943246 153.936278 4.6813246 153.846278 5.2243246 153.963278 7.7063246 153.811278 10.1643246 153.646278 12.6203246 153.615278 15.2493246 153.702278 17.7613246 153.846278 20.2163246 153.875278 22.6883246 153.846278 25.2233246 153.846278 27.8123246 153.846278 30.3773246 153.889278 32.9963246 153.746278 35.5083246 153.584278 38.0023246 153.574278 40.4683246 153.746278 42.9043246 153.569278 45.4443246 153.887278 47.8943246 153.646278 50.4013246 153.887278 52.7593246 153.626278 55.6183246 153.846278 57.9973246 153.919278 60.5223246 153.982278 63.0583246 153.946278 65.6933246 154.339278 68.0313246 154.293278 70.8093246 154.446278 73.3893246 154.198278 75.3743246 154.366278 77.3463246 154.346278 79.2863246 154.341278 79.7063246 154.233278 80.1033246 154.245278 80.2853246 154.244278 80.2693246 154.333278 80.3363246 154.346278 80.3853246 154.361278 80.4443246 154.345278 80.5263246 154.346278 80.5853246 154.355278 82.2543246 154.175278 83.6033246 154.146278 85.0833246 154.073278 88.7433246 153.993278 92.5903246 153.846278 96.6773246 154.308278 101.112325 154.104278 106.214325 154.146278 111.069325 154.636278 116.983325 153.873278 123.572325 154.446278 129.360325 154.717278 132.110325 154.817278 134.805325 154.745278 137.756325 154.674278 140.722325 154.589278 143.731325 154.745278 146.751325 154.902278 147.827325 154.748278 149.213325 154.946278 150.249325 154.984278 151.444325 154.986278 152.675325 156.145278 152.748325 156.645278 152.615325 156.822278 152.160325 156.744278 151.448325'/%3E%3C/g%3E%3C/svg%3E%0A`;
};

export const Card = styled.section<{ background?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings(8)};
  border-image-slice: 4 4 3 5 fill;
  border-image-width: 5px;
  border-image-outset: 0;
  border-image-repeat: stretch stretch;
  border-image-source: ${({ theme }) =>
    `url("${border(theme.ui.card.border)}")`};
  background: ${({ theme, background }) =>
    background ? theme.ui.background : "transparent"};
`;
