<template>
	<v-container class="pt-10 pt-md-15">
		<!-- reference: https://api.chucknorris.io/ -->
		<v-card max-width="500" class="mx-auto" dark>
			<v-card-title>
				<v-img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" width="500"></v-img>
			</v-card-title>
			<v-card-text class="text-h6 text-center">"{{result.value}}"</v-card-text>
			<v-card-actions class="pa-4">
				<v-btn block large class="grey--text font-weight-bold text-h6" @click="get()">Random</v-btn>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	name: "Home",
	data: () => ({
		result: {},
	}),
	methods: {
		get() {
			return axios
				.get("https://api.chucknorris.io/jokes/random")
				.then((res) => {
					this.result = res.data;
				});
		},
	},
	created() {
		this.get();
	},
};
</script>