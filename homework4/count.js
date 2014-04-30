function count_change(number){
	var coins = [1, 2, 5, 10, 20, 50];
	var sl = number + 1;
	var sum=[];
	while (sl){
		sum[sl]= 0;
		sl--;
	};
	sum[0] = 1;
	for (coin in coins){
		for(var j=coins[coin]; j<=number;j++){
			sum[j] = sum[j] + sum[j - coins[coin]];
					
		}
	}
	return sum[number];
}