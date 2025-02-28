import {UiTable} from '@common/business_components';

const publicReuseFacility = [
  { 
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },
  {
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },
  {
    sido: "서울",
    sigungo: "강남구",
    facilityName: "난지",
    location: "경기도 고양시 덕양구 대차로 4가",
    locationgubun: "500",
    facilityCapacity: "800,000",
    reuse: "Y",
    register: "Y"
  },   

]

const headList = [
                  { id: "sido", title: "시도" },
                  { id: "sigungo", title: "시군구" },
                  { id: "facilityName", title: "시설명" },
                  { id: "location", title: "위치" },
                  { id: "locationgubun", title: "지역구분" },
                  { id: "facilityCapacity", title: "시설용량" },
                  { id: "reuse", title: '재이용여부' },
                  { id: "register", title: '등록여부' }];


export default function PublicReuseFaciltyInsert() {
  const total = 100;
  return (  <div>
            <UiTable publicReuseFacility={publicReuseFacility} headlist={headList} pageSize={100}  total={total}/>
            </div>
  );
}
