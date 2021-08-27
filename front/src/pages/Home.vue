<template>
    <main>
		<div class="content-wrapper">
			<div class="row m-3">

				<div class="col-12 col-md-8">
					<div class="card">
						<div class="box-header m-2">
							<h3 class="box-title">Lista de Desenvolvedores</h3>
						</div>
						<div class="box-body no-padding">
							<b-table-simple striped small caption-top responsive>
								<b-thead head-variant="dark">
									<b-tr>
										<b-th>#							</b-th>
										<b-th>Nome						</b-th>
										<b-th>Sexo						</b-th>
										<b-th>Idade						</b-th>
										<b-th>Hobby						</b-th>
										<b-th>Dt Nasc.					</b-th>
										<b-th class="text-center">Ações	</b-th>
									</b-tr>
								</b-thead>
								<b-tbody>
									<b-tr v-for="(dev, index) in devs" :key="index">
										<b-th>{{ dev.id }}							</b-th>
										<b-th>{{ dev.nome }}						</b-th>
										<b-td>{{ gender[dev.sexo] }}				</b-td>
										<b-td>{{ dev.idade }}						</b-td>
										<b-td>{{ dev.hobby }}						</b-td>
										<b-td>{{ formatDate(dev.datanascimento) }}	</b-td>
										<b-td class="text-center">
											<b-button-group size="sm" class="mr-1">
												<b-button v-b-tooltip.hover :title="devs.length > 1 ? 'Editar' : ''" @click="edit(dev)">
													<b-icon icon="tools" aria-hidden="true"></b-icon>
												</b-button>
												<b-button v-b-tooltip.hover :title="devs.length > 1 ? 'Deletar' : ''" @click="remove(dev)">
													<b-icon icon="X" aria-hidden="true"></b-icon>
												</b-button>
											</b-button-group>
										</b-td>
									</b-tr>
								</b-tbody>
							</b-table-simple>
							<b-pagination v-model="page" align="center" :total-rows="rows" :per-page="perPage" aria-controls="my-table"></b-pagination>
						</div>
						<!-- /.box-body -->
					</div>
				</div>

				<div class="col-12 col-md-4">
					<div class="card p-3">
						<div class="box-header with-border">
							<h5 class="box-title">{{ formTitle }}</h5>
						</div>
						<form role="form">
							<div class="box-body">
								<div class="form-group mb-3">
									<label>Nome</label>
									<input class="form-control" type="text" v-model="dev.nome">
								</div>
								<div class="form-group mb-3">
									<label>Gênero</label>
									<b-form-select class="form-control" v-model="dev.sexo" :options="gender"></b-form-select>
								</div>
								<div class="form-group mb-3">
									<label>Nascimento</label>
									<input type="date" class="form-control" v-model="dev.datanascimento">
								</div>
								<div class="form-group mb-3">
									<label>Idade</label>
									<input type="number" class="form-control" v-model="dev.idade">
								</div>
								<div class="form-group mb-3">
									<label>Hobby</label>
									<input type="text" class="form-control" v-model="dev.hobby">
								</div>						
							</div>          
							<div class="row">
								<div>
									<b-button v-if="!editing" size="sm" variant="success" @click="save">Salvar</b-button>
									<b-button v-if="editing" size="sm" variant="primary" @click="update(dev)">Editar</b-button>
									<b-button class="m-1" size="sm" variant="dark" @click="clean">Limpar</b-button>
								</div>
							</div>
						</form>
					</div>

				</div>

			</div>
		</div>
    </main>
</template>

<script>
	import api from '@/services/api.js';

    export default {
        name: 'Home',
		data () {
			return  {
				formTitle		: 'Novo Desenvolvedor',
				editing			: false,
				rows			: 0,
				page			: 1,
				perPage			: 5,
				devs			: [],
				dev				: {
					nome			: '',
					sexo			: '',
					hobby			: '',
					datanascimento	: '',
					idade			: 0	,
				},
			}
		},
		async mounted () {
			await this.init();
		},
		watch: {
			page: async function (val) {
				await this.getList(val);
			}
		},
		computed: {
			gender: {
				get () {
					return {
						F: 'Feminino', M: 'Masculino'
					};
				}
			}
		},
		methods: {
			
			formatDate (date) {
				return this.$moment(date.slice(0, -1)).format('DD/MM/YYYY');
			},

			async init () {
				await this.getRows();
				await this.getList();
				this.clean();
			},

			async getList (currentPage = null) {
				let path	= `?page=${currentPage || this.page}&limit=${this.perPage}`
				this.devs 	= await this.makeRequest(path) || [];
			},

			async getRows () {
				this.rows = (await this.makeRequest()).length || 0;
			},

			async save () {
				if (!this.validateFields(this.dev))
					return false;
 
				let response = await this.makeRequest('', 'post', this.dev)
				if (response.id) {
					await this.init();
					this.$alert('Desenvolvedor criado com sucesso', 'Sucesso', 'success');
				}
			},

			async remove (data) {
				this.$confirm('Deseja realmente deletar este desenvolvedor?')
				.then( async () => {
					await this.makeRequest(`/${data.id}`, 'delete');
					await this.init();
					this.$alert('Desenvolvedor deletado com sucesso', 'Sucesso', 'success');
				});
			},

			async update (data) {
				this.$confirm('Deseja editar os dados deste desenvolvedor?')
				.then( async () => {
					await this.makeRequest(`/${data.id}`, 'put', data);
					await this.init();
					this.$alert('Alterado com sucesso', 'Sucesso', 'success');
				});
			},

			edit (data) {
				this.formTitle 	= `Editando: ${data.id} - ${data.nome}`;
				this.editing	= true;
				Object.assign(this.dev, data);
				this.dev.datanascimento = this
					.$moment(data.datanascimento.slice(0, -1))
					.format('YYYY-MM-DD');
			},

			validateFields (data) {
				let isValid = true;
				let invalid	= [];
				let _fn		= (field) => {
					invalid.push(field);
					isValid = false;
				}

				if (data.idade < 0)
					_fn('Idade');
				if (!data.nome.length) 
					_fn('Nome');
				if (!data.sexo.length) 
					_fn('Gênero');
				if (!data.datanascimento.length || this.$moment(data.datanascimento) > this.$moment()) 
					_fn('Nascimento');

				if (invalid.length)
					this.$alert(
						`Os campos: (${invalid.join(', ')}) estão inválidos ou vazios.`, 
						'Error', 
						'warning'
					);

				return isValid;
			},

			clean () {
				this.formTitle	= 'Novo Desenvolvedor';
				this.editing	= false;
				this.dev 		= {
					nome			: '',
					sexo			: '',
					hobby			: '',
					datanascimento	: '',
					idade			: 0	,
				};
			},

			async makeRequest (path = '', method = 'get', data = null) {
				return api[method.toLocaleLowerCase()](path, data)
				.then( res => {
					if (res.data.error) {
						this.$alert(res.data.data, 'Error', 'warning');
						return false;
					} 
					
					return res.data.data;					
				})
				.catch( e => {
					this.$alert(`Ocoreeu um erro, tente mais tarde!`, 'Error', 'warning');
					console.error(e);
					return false;
				})
			}
		},
    }
</script>

<style scoped>

    main {
        background-color: var(--color-background-home);
    }

	.text-top {
        color: var(--color-text-light);
        font-size: 20px;
        margin-bottom: 20px;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 13px;
        margin-top: 20px;
    }

    @media (max-width: 700px) {
        .text-bottom {
            font-size: 10px;
        }
    }

</style>