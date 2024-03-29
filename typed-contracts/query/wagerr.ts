/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/wagerr';
import type * as ReturnTypes from '../types-returns/wagerr';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/wagerr.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;
	readonly __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* getWager
	*
	* @param { string } id,
	* @returns { Result<ReturnTypes.Wager, ReturnTypes.LangError> }
	*/
	"getWager" (
		id: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Wager, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getWager", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(13, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getActiveWagers
	*
	* @returns { Result<Array<ReturnTypes.Wager>, ReturnTypes.LangError> }
	*/
	"getActiveWagers" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnTypes.Wager>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getActiveWagers", [], __options , (result) => { return handleReturnType(result, getTypeDescription(14, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* getPendingWagers
	*
	* @returns { Result<Array<ReturnTypes.Wager>, ReturnTypes.LangError> }
	*/
	"getPendingWagers" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Array<ReturnTypes.Wager>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "getPendingWagers", [], __options , (result) => { return handleReturnType(result, getTypeDescription(14, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* createWager
	*
	* @param { string } name,
	* @param { string } terms,
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"createWager" (
		name: string,
		terms: string,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "createWager", [name, terms], __options , (result) => { return handleReturnType(result, getTypeDescription(15, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* joinWager
	*
	* @param { string } id,
	* @returns { Result<Result<ReturnTypes.Wager, ReturnTypes.WagerrError>, ReturnTypes.LangError> }
	*/
	"joinWager" (
		id: string,
		__options ? : GasLimitAndRequiredValue,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.Wager, ReturnTypes.WagerrError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "joinWager", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(16, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* claimWin
	*
	* @param { string } id,
	* @returns { Result<Result<ReturnTypes.Wager, ReturnTypes.WagerrError>, ReturnTypes.LangError> }
	*/
	"claimWin" (
		id: string,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.Wager, ReturnTypes.WagerrError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "claimWin", [id], __options , (result) => { return handleReturnType(result, getTypeDescription(16, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* acceptRejectClaim
	*
	* @param { string } id,
	* @param { ArgumentTypes.ClaimAction } action,
	* @returns { Result<Result<ReturnTypes.Wager, ReturnTypes.WagerrError>, ReturnTypes.LangError> }
	*/
	"acceptRejectClaim" (
		id: string,
		action: ArgumentTypes.ClaimAction,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.Wager, ReturnTypes.WagerrError>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "acceptRejectClaim", [id, action], __options , (result) => { return handleReturnType(result, getTypeDescription(16, DATA_TYPE_DESCRIPTIONS)); });
	}

}