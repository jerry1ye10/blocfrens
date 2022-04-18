use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::serde_json;
use near_sdk::{env, near_bindgen, setup_alloc, Promise};

setup_alloc!();

#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
pub struct DeployArgs {
    money_goal: u128,
    nft_id: String,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Factory;

impl Default for Factory {
  fn default() -> Self {
    Self {

    }
  }
}

const CODE: &[u8] = include_bytes!("./greeter.wasm");



#[near_bindgen]
impl Factory {
    pub fn deploy(self, money_goal: u128, nft_id: String ) {
        let mut account_id: String = "dev-1650291992640-60218357254222".to_string();
        account_id.push_str(&nft_id);
        let init_args = &DeployArgs { money_goal: money_goal, nft_id: nft_id };

        Promise::new(account_id.parse().unwrap())
            .create_account()
            .add_full_access_key(env::signer_account_pk())
            .transfer(1_000_000_000_000_000_000_000_0000)
            .deploy_contract(CODE.to_vec())
            .function_call(
                b"new".to_vec(),
                serde_json::to_vec(init_args).unwrap(),
                0,
                1_000_000_000_0000,
            );
    }
}
