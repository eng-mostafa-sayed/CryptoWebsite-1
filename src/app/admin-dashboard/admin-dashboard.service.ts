import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from './models/plan.model';
import { Miner } from './models/miner.model';
import { RequestNew } from './models/req-new.model';
import { RequestApproved } from './models/req-approved.model';
import { User } from './models/user.model';
import { UserPlan } from './models/user-plan.model';
import { UserAsic } from './models/userAsic.model';
@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {
  private rootURL = 'https://cominer.herokuapp.com';
  private key =
    'c3fe929c35dd0cbcc8f062bb60e9d2ce7d14be21513d07c53e370d81ba9de4a4';
  constructor(private http: HttpClient) {}

  ////////////////////             Plans               ////////////////////////
  getPlans() {
    return this.http.get<Plan[]>(
      `${this.rootURL}/api/plan/admin?key=${this.key}`
    );
  }

  addNewPlan(plan: Plan) {
    return this.http.post(
      `${this.rootURL}/api/plan/add?key=${this.key}`,
      {
        planType: plan.planType,
        planName: plan.planName,
        cryptoName: plan.cryptoName,
        algorithm: plan.algorithm,
        planDuration: plan.planDuration,
        profitability: plan.planDuration,
        price: plan.price,
        availability: plan.availability,
      },
      { responseType: 'text' }
    );
  }

  updatePlan(plan: Plan) {
    return this.http.put(
      `${this.rootURL}/api/plan/update/${plan._id}?key=${this.key}`,
      {
        planType: plan.planType,
        planName: plan.planName,
        cryptoName: plan.cryptoName,
        algorithm: plan.algorithm,
        planDuration: plan.planDuration,
        profitability: plan.profitability,
        price: plan.price,
        availability: plan.availability,
      },
      { responseType: 'text' }
    );
  }
  deletePlan(plan: Plan) {
    return this.http.delete(
      `${this.rootURL}/api/plan/delete/${plan._id}?key=${this.key}`,
      { responseType: 'text' }
    );
  }
  ////////////////////             Miners               ////////////////////////
  getMiners() {
    return this.http.get<Miner[]>(
      `${this.rootURL}/api/asic/admin?key=${this.key}`
    );
  }

  addNewMiner(miner: Miner) {
    return this.http.post(
      `${this.rootURL}/api/asic/add?key=${this.key}`,
      {
        asicName: miner.asicName,
        cryptoName: miner.cryptoName,
        algorithm: miner.algorithm,
        hashPower: miner.hashPower,
        price: miner.price,
        hostFees: miner.hostFees,
      },
      { responseType: 'text' }
    );
  }

  updateMiner(miner: Miner) {
    return this.http.put(
      `${this.rootURL}/api/asic/update/${miner._id}?key=${this.key}`,
      {
        asicName: miner.asicName,
        cryptoName: miner.cryptoName,
        algorithm: miner.algorithm,
        hashPower: miner.hashPower,
        price: miner.price,
        hostFees: miner.hostFees,
        availability: miner.availability,
      },
      { responseType: 'text' }
    );
  }
  deleteMiner(miner: Miner) {
    return this.http.delete(
      `${this.rootURL}/api/asic/delete/${miner._id}?key=${this.key}`,
      { responseType: 'text' }
    );
  }
  ////////////////////             Buy requests               ////////////////////////

  getRequests() {
    return this.http.get<RequestNew[]>(
      `${this.rootURL}/api/asic/x/contract/ondemand?key=${this.key}`
    );
  }
  getAddress(asicID: string) {
    return this.http.get<{
      address: string;
    }>(`${this.rootURL}/api/transaction/admin/getdepositaddressForAsicContarct?asicID=${asicID}
    `);
  }
  acceptRequest(asicID: string, address: string, workerID: string) {
    return this.http.put(
      `${this.rootURL}/api/asic/x/contract/activate/${asicID}?key=${this.key} `,
      {
        address,
        workerID,
      },
      { responseType: 'text' }
    );
  }
  getApprovedRequests() {
    return this.http.get<RequestApproved[]>(
      `${this.rootURL}/api/asic/x/contract/activeContracts?key=${this.key} `
    );
  }
  endContract(contractID: string) {
    return this.http.put(
      `${this.rootURL}/api/asic/x/contract/expire/${contractID}?key=${this.key}`,
      {},
      { responseType: 'text' }
    );
  }
  ////////////////////////////// subscribed users ////////////////////////
  getSubscribedUsers() {
    return this.http.get<User[]>(
      `${this.rootURL}/api/admin/getUsers?key=${this.key}`
    );
  }
  getUserData(userID: string) {
    return this.http.get<User>(
      `${this.rootURL}/api/admin/getUserData/${userID}?key=${this.key}`
    );
  }
  getUserPlans(userID: string) {
    return this.http.get<UserPlan[]>(
      `${this.rootURL}/api/plan/admin/getUserContracts/${userID}?key=${this.key}`
    );
  }
  getUserAsics(userID: string) {
    return this.http.get<UserAsic[]>(
      `${this.rootURL}/api/asic/admin/getUserContracts/${userID}?key=${this.key}`
    );
  }
  getUserDepositsLogs(userID: string) {
    return this.http
      .get(`${this.rootURL}/api/transaction/admin/${userID}/getUserdeposits
    `);
  }
  getUserWithdrawsLogs(userID: string) {
    return this.http
      .get(`${this.rootURL}/api/transaction/admin/${userID}/getUserwithdraws
    `);
  }
}
